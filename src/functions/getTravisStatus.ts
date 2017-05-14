import {Message} from 'discord.js'
import {addressBook} from '../api/addressBook'
import {getRequest} from '../api/externalCalls'

export async function getTravisStatus(message: Message) {
  try {
    const res = await getRequest(addressBook.travisBuild)
    if (res.last_build_status === 0) {
      message.reply(`**${res.slug}**'s most recent build on our CI is passing!`)
    } else {
      message.reply(`**${res.slug}**'s most recent build on our CI is failing!`)
    }
  } catch (err) {
    message.reply(err)
  }
}
