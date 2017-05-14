import {addressBook} from '../api/addressBook'
import {getRequest} from '../api/externalCalls'

export function getTravisStatus(message: any) {
  getRequest(addressBook.travisBuild)
    .then((res) => {
      if (res.last_build_status === 0) {
        message.reply(`**${res.slug}**'s most recent build on our CI is passing!`)
      } else {
        message.reply(`**${res.slug}**'s most recent build on our CI is failing!`)
      }
    })
    .catch((err) => {
      message.reply(err)
    })
}
