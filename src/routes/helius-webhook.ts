import { env } from '@/env'
// import { heliusResponse } from '@/mocks/helius'
import { sendMessageToTelegram } from '@/utils/send-message-to-telegram'
import Elysia, { t } from 'elysia'

export const heliusWebhook = new Elysia().post(
  '/helius-webhook',
  async ({ body }) => {
    if (body[0].type === 'TRANSFER') {
      const transfers = body
        .map((transaction: any) => {
          return {
            sender: transaction.nativeTransfers[0].fromUserAccount,
            receiver: transaction.nativeTransfers[0].toUserAccount,
            type: transaction.type,
            amount: transaction.nativeTransfers[0].amount / Math.pow(10, 9),
          }
        })
        .filter((transaction: any) => {
          return (
            transaction.sender === env.SOL_WALLET &&
            transaction.type === 'TRANSFER' &&
            transaction.amount >= 1.1 &&
            transaction.amount <= 3
          )
        })

      if (transfers.length > 0) {
        await sendMessageToTelegram(
          `<b>SENDER:</b> ${env.SOL_WALLET}\n\n<b>RECEIVERS:</b>${transfers.map(
            (transaction: any, index) =>
              `\n\n<b>WALLET ${index + 1} - ${transaction.receiver}</b>\n<b>GMGN:</b> https://gmgn.ai/sol/address/${transaction.receiver}\n<b>AMOUNT:</b> ${transaction.amount.toFixed(2)} SOL`,
          )}\n\n <b>All wallets:</b>\n${transfers.map((transaction: any) => `\n${transaction.receiver}`)}`,
        )
      }
    }

    const tokensCreated = body
      .map((transaction) => {
        return {
          feePayer: transaction.feePayer,
          mint: body[0].tokenTransfers[0].mint,
          toUserAccount: body[0].tokenTransfers[0].toUserAccount,
          type: transaction.type,
          timestamp: transaction.timestamp,
        }
      })
      .filter((transaction) => {
        return transaction.type === 'TOKEN_MINT'
      })

    if (tokensCreated.length > 0) {
      await sendMessageToTelegram(
        `<b>🟢🟢🚀NEW TOKEN CREATED</b>
        \n\n<b>👨‍🍳DEV:</b> ${tokensCreated[0].feePayer}
        \n\n<b>🐊GMGN:</b> https://gmgn.ai/sol/token/${tokensCreated[0].mint}
        \n\n<b>👾SOLSCAN:</b> https://solscan.io/token/${tokensCreated[0].mint}
        \n\n<b>🐙PHOTON:</b> https://photon-sol.tinyastro.io/en/lp/${tokensCreated[0].toUserAccount}?handle=907954a92624d6498fc60
        \n\n<b>🔗CA:</b> ${tokensCreated[0].mint}`,
        // \n\n<b>🕐CREATION DATE:</b> ${dayjs(new Date(tokensCreated[0].timestamp)).format('DD/MM/YYYY HH:mm:ss')}
      )
    }
  },
  {
    body: t.Any({}),
  },
)
