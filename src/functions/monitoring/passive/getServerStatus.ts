import {Message} from 'discord.js'
import * as moment from 'moment'
import {addressBook} from '../../../api/addressBook'
import {getRequest} from '../../../api/externalCalls'

export async function getServerStatus(message: Message) {
  const requestTime = moment(new Date())
  try {
    const res = await getRequest(addressBook.hollowverse)

    const responseTime = moment(res.headers.date)
    const timeDifference = moment.duration(responseTime.diff(requestTime))
    const latency = timeDifference.asMilliseconds()

    if (res.status === 200) {
      message.reply(`**https://x.hollowverse.com** is up. *Server response processed in ${latency}ms.* :rocket: `)
    } else {
      message.reply(`**https://x.hollowverse.com** is down. :fire: `)
    }
  } catch (err) {
    message.reply(err)
  }
}
