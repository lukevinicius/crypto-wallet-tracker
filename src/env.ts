import { z } from 'zod'

const envSchema = z.object({
  GMGN_CODE: z.string(),
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
  PORT: z.coerce.number().default(3333),
  HELIUS_API_URL: z.string(),
  HELIUS_API_KEY: z.string(),
  HELIUS_WEBHOOK_ID: z.string(),
  SOL_WALLET: z.string(),
  SHYFT_API_URL: z.string(),
  SHYFT_API_KEY: z.string(),
  SHYFT_WALLETS_CALLBACK_ID: z.string(),
  TELEGRAM_API_BOT_URL: z.string(),
  TELEGRAM_API_BOT_TOKEN: z.string(),
  TELEGRAM_CHAT_ID: z.string(),
})

export const env = envSchema.parse(process.env)
