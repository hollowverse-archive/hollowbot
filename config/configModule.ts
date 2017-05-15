const env = process.env.NODE_ENV || 'development'
let localConfig

/*
try {
  localConfig = require('./config.json')
} catch (e) {
  console.log('Local config.json is NOT available -- Relying on environmental variables on the container.')
  localConfig = false
}

if (env === 'development' || env === 'test' && localConfig) {
  let envConfig = localConfig[env]

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key]
  })
}
*/
