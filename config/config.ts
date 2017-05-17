import * as fs from 'fs'

let configFile
let localConfig

// If project is being run locally, the developer will have their API key in the json file
try {
  configFile = fs.readFileSync('./config/hollowbot.config.json', 'utf8')
  localConfig = JSON.parse(configFile)
} catch (error) {
  // Project doesn't have a local config, we'll look for an environment variable set via the deployment medium
  console.log('Local config is not available! -- Relying on environment variables.')
  localConfig = false
}

export const discordKey: string = process.env.discordKey || localConfig.discordKey
