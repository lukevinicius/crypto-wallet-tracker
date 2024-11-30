import axios from 'axios'
import { env } from '@/env'

export async function sendMessageToTelegram(text: string) {
  await axios.post(
    `${env.TELEGRAM_API_BOT_URL}${env.TELEGRAM_API_BOT_TOKEN}/sendMessage`,
    {
      chat_id: env.TELEGRAM_CHAT_ID,
      text,
      parse_mode: 'html',
    },
  )
}
