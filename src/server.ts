import * as discord from 'discord.js'

import { TOKEN } from './config'
import { success, fail } from './logger'
import { handleMessage } from './functions'

const bot = new discord.Client()

bot.login(TOKEN).catch((err) => fail(`Failed to log in with bot token. ${err}`))

bot.on('ready', () => {
  success('Bot is ready!')
  bot.user.setActivity('.cf help')
})

bot.on('message', (msg) => {
  const command = msg.content.split(' ')[0]
  const channel = msg.channel as discord.TextChannel

  if (command === '/dot' && msg.content.length > 4) {
    handleMessage(msg,channel)
  }
})
