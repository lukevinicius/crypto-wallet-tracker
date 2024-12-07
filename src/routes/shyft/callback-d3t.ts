import Elysia, { t } from 'elysia'

import { env } from '@/env'
import { sendMessageToTelegram } from '@/utils/send-message-to-telegram'
import axios from 'axios'

interface IResponseWebhook {
  webhookID: string
  wallet: string
  webhookURL: string
  transactionTypes: string[]
  accountAddresses: string[]
  webhookType: string
  authHeader: string
}

interface IRequestEditWebhook {
  webhookURL: string
  transactionTypes: string[]
  accountAddresses: string[]
  webhookType: string
  authHeader: string
}

export const shyftD3tCallback = new Elysia().post(
  '/shyft/callback-d3t',
  async ({ body }) => {
    const action = body.actions.pop()

    if (
      action.type === 'SOL_TRANSFER' &&
      action.info.sender === env.SOL_WALLET &&
      action.info.amount >= 1 &&
      action.info.amount <= 1.5
    ) {
      const { data } = await axios.get(
        `${env.SHYFT_API_URL}/sol/v1/wallet/transaction_history`,
        {
          headers: {
            'x-api-key': env.SHYFT_API_KEY,
          },
          params: {
            network: 'mainnet-beta',
            wallet: action.info.receiver,
          },
        },
      )

      if (data.result.length <= 1) {
        const { data } = await axios.get<IResponseWebhook>(
          `${env.HELIUS_API_URL}/${env.HELIUS_WEBHOOK_ID}?api-key=${env.HELIUS_API_KEY}`,
        )

        data.accountAddresses.push(action.info.receiver)

        const requestData: IRequestEditWebhook = {
          webhookURL: data.webhookURL,
          transactionTypes: data.transactionTypes,
          accountAddresses: data.accountAddresses,
          webhookType: data.webhookType,
          authHeader: data.authHeader,
        }

        await axios
          .put(
            `${env.HELIUS_API_URL}/${env.HELIUS_WEBHOOK_ID}?api-key=${env.HELIUS_API_KEY}`,
            {
              ...requestData,
            },
          )
          .catch((error) => {
            console.error(error)
          })

        await sendMessageToTelegram(
          `<b>🟢🟢👛WALLET NO TRADING</b>
          \n\n<b>Wallet:</b> ${action.info.receiver}`,
        )
      }
    }
  },
  {
    body: t.Any({}),
  },
)
