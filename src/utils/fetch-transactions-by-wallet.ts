import axios from 'axios'
import { env } from '@/env'
import { transactionsByWallet } from '@/mocks/transactions-by-wallet'

export async function fetchTransactionsByWallet() {
  const { data } =
    env.NODE_ENV !== 'development'
      ? transactionsByWallet
      : await axios.get(
          `${env.SHYFT_API_URL}/sol/v1/wallet/transaction_history?network=mainnet-beta&wallet=${env.SOL_WALLET}`,
          {
            headers: {
              'x-api-key': env.SHYFT_API_KEY,
            },
          },
        )

  return data
}
