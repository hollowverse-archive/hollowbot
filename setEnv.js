#! /usr/bin/env node

const fs = require('fs');
const path = require('path');

const SECRET_FILE_PATH = path.join(__dirname, './secrets/discord.json');

/**
 * @type {DiscordSecret}
 */
const discordConfig = JSON.parse(fs.readFileSync(SECRET_FILE_PATH, 'utf8'));

process.env.BOT_NAME = discordConfig.name;
process.env.HUBOT_DISCORD_TOKEN = discordConfig.token;
