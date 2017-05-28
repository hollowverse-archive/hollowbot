import * as Discord from 'discord.js'
import {discordKey} from '../config/config'
import {getServerStatus} from './functions/monitoring/onDemand/getServerStatus'
import {getTravisStatus} from './functions/monitoring/onDemand/getTravisStatus'
import {returnPingPong} from './functions/trivia/pingPong'
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
  if (message.content === '!ping') returnPingPong(message)
})

client.on('message', message => {
  if (message.content === '!commands') getAllCommands(message)
})
