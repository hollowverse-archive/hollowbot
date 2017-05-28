import {Message} from 'discord.js'
import {getRandomInteger} from '../../utils/utils'

export function returnPingPong(message: Message): void {
  const randomInt = getRandomInteger(1, 2)

  if (randomInt === 1) {
    message.reply(':ping_pong: pong! I returned your shot pretty nicely!')
  } else {
    message.reply(':weary: darn! I missed!')
  }
}
