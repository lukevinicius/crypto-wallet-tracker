import { env } from '@/env'
import { heliusResponse } from '@/mocks/helius'
import { sendMessageToTelegram } from '@/utils/send-message-to-telegram'
import Elysia from 'elysia'

export const heliusWebhook = new Elysia().post('/helius-webhook', async () => {
  const data = heliusResponse

  const transfers = data
    .map((transaction) => {
      return {
        sender: transaction.nativeTransfers[0].fromUserAccount,
        receiver: transaction.nativeTransfers[0].toUserAccount,
        type: transaction.type,
        amount: transaction.nativeTransfers[0].amount / Math.pow(10, 9),
      }
    })
    .filter((transaction) => {
      return (
        transaction.sender === env.SOL_WALLET &&
        transaction.type === 'TRANSFER' &&
        transaction.amount >= 1.1 &&
        transaction.amount <= 3
      )
    })

  await sendMessageToTelegram(
    `<b>SENDER:</b> ${env.SOL_WALLET}\n\n<b>RECEIVERS:</b>${transfers.map(
      (transaction, index) =>
        `\n\n<b>WALLET ${index + 1} - ${transaction.receiver}</b>\n<b>GMGN:</b> https://gmgn.ai/sol/address/${transaction.receiver}\n<b>AMOUNT:</b> ${transaction.amount.toFixed(2)} SOL`,
    )}\n\n <b>All wallets:</b>\n${transfers.map((transaction) => `\n${transaction.receiver}`)}`,
  )

  return {
    message: 'Hello from Helius Webhook!',
  }
})
