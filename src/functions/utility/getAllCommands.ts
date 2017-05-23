export function getAllCommands(message: any) {
  message.reply(`My current command list is as follows:
    - **!ping** "Checks connectivity and replies with pong" :ping_pong:
    - **!status travis** "Checks latest Travis build and reports the status" :fire:
    - **!status hollowverse** "Checks if x.hollowerse.com is up or down" :rocket:
  `)
}
