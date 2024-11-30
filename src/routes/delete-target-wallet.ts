import { env } from '@/env'
import axios from 'axios'
import Elysia, { t } from 'elysia'

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

export const deleteHeliusTargetWallet = new Elysia().delete(
  '/helius/delete-target-wallet',
  async ({ body }) => {
    const { data } = await axios.get<IResponseWebhook>(
      `${env.HELIUS_API_URL}/${env.HELIUS_WEBHOOK_ID}?api-key=${env.HELIUS_API_KEY}`,
    )

    const wallets = body.wallet.split(',')

    // remove wallets with spaces
    wallets.forEach((wallet, index) => {
      if (wallet.includes(' ')) {
        wallets[index] = wallet.replace(' ', '')
      }
    })

    data.accountAddresses = data.accountAddresses.filter(
      (address) => !wallets.includes(address),
    )

    data.accountAddresses.push(...wallets)

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
  },
  {
    body: t.Object({
      wallet: t.String(),
    }),
  },
)
