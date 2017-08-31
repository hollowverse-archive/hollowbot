#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const shelljs = require('shelljs');

const SECRET_FILE_PATH = path.join(__dirname, './secrets/discord.json');

/**
 * @type {DiscordSecret}
 */
const { name, token } = JSON.parse(fs.readFileSync(SECRET_FILE_PATH, 'utf8'));

shelljs.env.HUBOT_DISCORD_TOKEN = token;

shelljs.exec(`hubot --adapter discord --name ${name}`);
