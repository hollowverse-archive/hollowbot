export function getAllCommands(message: any) {
  message.reply(`My current command list is as follows:
    - **!ping** "Checks connectivity and replies with pong" :ping_pong:
    - **!status** "Checks latest Travis build and reports the status" :fire:
  `)
}
