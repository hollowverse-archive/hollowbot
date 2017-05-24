import {Message} from 'discord.js'
import {addressBook} from '../../../api/addressBook'
import {getRequest} from '../../../api/externalCalls'
import {calculateLatency} from '../../../utils/utils'

export async function getServerStatus(message: Message) {

  try {
    const requestTime = new Date()
    const response = await getRequest(addressBook.hollowverse).then((res) => {
      const responseTime = new Date()
      const latency = calculateLatency(responseTime, requestTime)

      return {...res, latency}
    })
    if (response.status === 200) {
      console.log(response)
      message.reply(`**https://x.hollowverse.com** is up. Server responded me with code **${response.status}** processed in **${response.latency} ms**. :rocket:`)
    } else {
      message.reply(`**https://x.hollowverse.com** is down. :fire: `)
    }
  } catch (err) {
    message.reply(err)
  }
}
