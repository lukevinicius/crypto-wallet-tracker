import { Elysia } from 'elysia'
import { heliusWebhook } from './routes/helius-webhook'
import { heliusTargetWallet } from './routes/add-target-wallet'
import { deleteHeliusTargetWallet } from './routes/delete-target-wallet'
import { deleteAllHeliusWallets } from './routes/delete-all-wallets'
import { shyftD3tCallback } from './routes/shyft/callback-d3t'
import { shyftTokenWalletsCallback } from './routes/shyft/token-wallets-callback'
// import { env } from '@/env'
// import { cron } from '@elysiajs/cron'
// import { sendMessageToTelegram } from './utils/send-message-to-telegram'
// import { fetchTransactionsByWallet } from './utils/fetch-transactions-by-wallet'

// const ordersDB: {
//   transactionId: string
//   sender: string
//   receiver: string
//   amount: number
//   createdAt: Date
// }[] = []

const app = new Elysia()
  // .use(
  //   cron({
  //     name: 'Wallet tracker',
  //     pattern: '*/10 * * * * *',
  //     async run() {
  //       const data = await fetchTransactionsByWallet()

  //       const ordersFiltered = data.result
  //         .map((transaction: any) => {
  //           const lastAction = transaction.actions.pop()

  //           return {
  //             transactionId:
  //               lastAction.info.sender +
  //               lastAction.info.receiver +
  //               lastAction.info.amount,
  //             sender: lastAction.info.sender,
  //             receiver: lastAction.info.receiver,
  //             amount: lastAction.info.amount,
  //             createdAt: new Date(),
  //           }
  //         })
  //         .filter((order: any) => {
  //           return (
  //             order &&
  //             order.sender === env.SOL_WALLET &&
  //             order.amount >= 1.1 &&
  //             order.amount <= 3
  //           )
  //         })

  //       const ordersNotInDB: any[] = ordersFiltered.filter((order: any) => {
  //         const transactionExists = ordersDB.find(
  //           (orderDB) => orderDB.transactionId === order.transactionId,
  //         )

  //         return !transactionExists
  //       })

  //       ordersFiltered.forEach((order: any) => {
  //         const transactionExists = ordersDB.find(
  //           (orderDB) => orderDB.transactionId === order.transactionId,
  //         )

  //         if (!transactionExists) {
  //           ordersDB.push(order)
  //         }
  //       })

  //       if (ordersNotInDB.length > 0) {
  //         await sendMessageToTelegram(
  //           `<b>SENDER:</b> ${ordersNotInDB[0].sender}\n\n<b>RECEIVERS:</b>${ordersNotInDB.map(
  //             (transaction, index) =>
  //               `\n\n<b>WALLET ${index + 1} - ${transaction.receiver}</b>\n<b>GMGN:</b> https://gmgn.ai/sol/address/${transaction.receiver}\n<b>AMOUNT:</b> ${transaction.amount.toFixed(2)} SOL`,
  //           )}\n\n <b>All wallets:</b>\n${ordersDB.map((transaction) => `\n${transaction.receiver}`)}`,
  //         )
  //       }
  //     },
  //   }),
  // )
  .use(heliusWebhook)
  .use(heliusTargetWallet)
  .use(deleteHeliusTargetWallet)
  .use(deleteAllHeliusWallets)
  .use(shyftD3tCallback)
  .use(shyftTokenWalletsCallback)
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
)
