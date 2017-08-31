#! /usr/bin/env node

/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const decryptSecrets = require('@hollowverse/common/helpers/decryptSecrets');
const shelljs = require('shelljs');
const executeCommands = require('@hollowverse/common/helpers/executeCommands');
const retryCommand = require('@hollowverse/common/helpers/retryCommand');
const writeEnvFile = require('@hollowverse/common/helpers/writeEnvFile');

const {
  ENC_PASS_HOLLOWBOT,
  ENC_PASS_TRAVIS,
  PROJECT,
  BRANCH,
  IS_PULL_REQUEST,
} = shelljs.env;

const isPullRequest = IS_PULL_REQUEST !== 'false';

const secrets = [
  {
    password: ENC_PASS_HOLLOWBOT,
    decryptedFilename: 'gcloud.hollowbot.json',
  },
  {
    password: ENC_PASS_TRAVIS,
    decryptedFilename: 'gcloud.travis.json',
  },
];

async function main() {
  let commands;
  commands = ['yarn test'];

  if (BRANCH !== 'master') {
    console.info('Skipping deployment on non-master branches');
  } else if (isPullRequest === true) {
    console.info('Skipping deployment commands in PRs');
  } else {
    commands = [
      ...commands,
      () => writeEnvFile('hollowbot', shelljs.env, './env.json'),
      () => decryptSecrets(secrets, './secrets'),
      `gcloud auth activate-service-account --key-file secrets/gcloud.travis.json`,
      // Remove Travis key file so it does not get deployed with the service
      () => {
        shelljs.rm('./secrets/gcloud.travis.json*');
        return 0;
      },
      () =>
        retryCommand(
          `gcloud app deploy app.yaml --project ${PROJECT} --version ${BRANCH} --quiet`,
        ),
    ];
  }

  const code = await executeCommands(commands);

  process.exit(code);
}

main();
