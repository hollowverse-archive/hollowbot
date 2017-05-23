import * as Discord from 'discord.js'
import {discordKey} from '../config/config'
import {getServerStatus} from './functions/monitoring/passive/getServerStatus'
import {getTravisStatus} from './functions/monitoring/passive/getTravisStatus'
import {getAllCommands} from './functions/utility/getAllCommands'

const client = new Discord.Client()

try {
  client.login(discordKey)
} catch (error) {
  throw error
}

client.on('ready', () => {
  console.log('I am ready!')
})

client.on('message', message => {
  if (message.content === '!status travis') getTravisStatus(message)
})

client.on('message', message => {
  if (message.content === '!status hollowverse') getServerStatus(message)
})

client.on('message', message => {
  if (message.content === '!ping') message.reply(':ping_pong: pong!')
})

client.on('message', message => {
  if (message.content === '!commands') getAllCommands(message)
})
