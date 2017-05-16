import * as fs from 'fs'

let configFile
let localConfig

// If project is being run locally, the developer will have their API key in the json file
try {
  configFile = fs.readFileSync('./config/hollowbot.config.json', 'utf8')
  localConfig = JSON.parse(configFile)
} catch (error) {
  // Project doesn't have a local config, we'll look for an environmental variable set via the Deployment medium
  console.log('Local config is not available! -- Relying on environmental variables on the container.')
}

export const DISCORD_KEY: string = process.env.DISCORD_KEY || localConfig.DISCORD_KEY
