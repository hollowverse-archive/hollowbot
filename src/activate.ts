require('../config/configModule')
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
  if (message.content === 'good robot') {
    message.reply(':ping_pong: pong!')
  }
})

client.on('message', message => {
  if (message.content === '!commands') {
    getAllCommands(message)
  }
})

client.login(process.env.HOLLOWBOT)
