import Elysia, { t } from 'elysia'

import { sendMessageToTelegram } from '@/utils/send-message-to-telegram'
import { env } from '@/env'

export const shyftTokenWalletsCallback = new Elysia().post(
  '/shyft/token-wallets-callback',
  async ({ body }) => {
    const action = body.actions.pop()

    if (action.type === 'TOKEN_MINT') {
      await sendMessageToTelegram(
        `<b>🟢🟢🚀NEW TOKEN CREATED</b>
        \n\n<b>👨‍🍳DEV:</b> ${action.info.receiver_address}
        \n\n<b>🐊GMGN:</b> https://gmgn.ai/sol/token/${env.GMGN_CODE}_${action.info.token_address}
        \n\n<b>👾SOLSCAN:</b> https://solscan.io/token/${action.info.token_address}
        \n\n<b>🐙PHOTON:</b> https://photon-sol.tinyastro.io/en/lp/${action.info.receiver_address}?handle=907954a92624d6498fc60
        \n\n<b>🔗CA:</b> ${action.info.token_address}`,
        // \n\n<b>🕐CREATION DATE:</b> ${dayjs(new Date(tokensCreated[0].timestamp)).format('DD/MM/YYYY HH:mm:ss')}
      )
    }
  },
  {
    body: t.Any({}),
  },
)
