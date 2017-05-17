import {discordKey} from '../config/config'
import * as Discord from 'discord.js'
import {getTravisStatus} from './functions/getTravisStatus'
import {getAllCommands} from './functions/getAllCommands'

const client = new Discord.Client()

client.on('ready', () => {
  console.log('I am ready!')
})

client.on('message', message => {
  if (message.content === '!status') {
    getTravisStatus(message)
  }
})

client.on('message', message => {
  if (message.content === '!ping') {
    message.reply(':ping_pong: pong!')
  }
})

client.on('message', message => {
  if (message.content === '!commands') {
    getAllCommands(message)
  }
})

console.log(discordKey)
client.login(discordKey)
