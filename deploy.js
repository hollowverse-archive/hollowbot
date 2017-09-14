#! /usr/bin/env node

/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const decryptSecrets = require('@hollowverse/common/helpers/decryptSecrets');
const shelljs = require('shelljs');
const executeCommands = require('@hollowverse/common/helpers/executeCommands');

const { ENC_PASS_DISCORD, IS_PULL_REQUEST } = shelljs.env;

const isPullRequest = IS_PULL_REQUEST !== 'false';

const secrets = [
  {
    password: ENC_PASS_DISCORD,
    decryptedFilename: 'discord.json',
  },
];

async function main() {
  const buildCommands = ['yarn test', 'yarn server/build', 'yarn client/build'];
  const deploymentCommands = [() => decryptSecrets(secrets, './secrets')];

  let isDeployment = false;
  if (isPullRequest === true) {
    console.info('Skipping deployment commands in PRs');
  } else if (secrets.some(secret => secret.password === undefined)) {
    console.info(
      'Skipping deployment commands because some secrets are not provided',
    );
  } else {
    isDeployment = true;
  }

  try {
    await executeCommands(
      isDeployment ? [...buildCommands, ...deploymentCommands] : buildCommands,
    );
  } catch (e) {
    console.error('Build/deployment failed:', e);
    process.exit(1);
  }
}

main();
