import Elysia, { t } from 'elysia'

import { env } from '@/env'
import axios from 'axios'

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
        await axios.post(
          `${env.SHYFT_API_URL}/sol/v1/callback/add-addresses`,
          {
            id: env.SHYFT_WALLETS_CALLBACK_ID,
            addresses: [action.info.receiver],
          },
          {
            headers: {
              'x-api-key': env.SHYFT_API_KEY,
            },
          },
        )

        // await sendMessageToTelegram(
        //   `<b>🟢🟢👛WALLET NO TRADING</b>
        //     \n\n<b>👨‍🍳DEV:</b> ${action.info.receiver}
        //     \n\n<b>🐊GMGN:</b> https://gmgn.ai/sol/address/${env.GMGN_CODE}_${action.info.receiver}
        //     \n\n<b>👾SOLSCAN:</b> https://solscan.io/account/${action.info.receiver}`,
        // )
      }
    }
  },
  {
    body: t.Any({}),
  },
)
