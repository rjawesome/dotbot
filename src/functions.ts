import * as codeforces from 'codeforces-api'
import * as discord from 'discord.js'

import { success, info, warn } from './logger'

export const handleMessage = (
  msg: discord.Message,
  channel: discord.TextChannel
): void => {
  try {
    const contents = msg.content.substr(5,msg.content.length)
    const member = channel.guild.member(msg.author)
    const nickname = member ? `${member.displayName}` : ""
    msg.delete()
    channel.send("`"+nickname+"`: "+contents+'...')
    success('Message sucessfully sent of: ' + nickname+contents+'...')
  }
  catch (e) {
    warn('Message failed to send because of: ' + e)
  }
}
