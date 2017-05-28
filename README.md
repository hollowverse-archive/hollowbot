# HollowBot

<img src="/hollowbotalpha.png" alt="HollowBot" width="256px" />

[![Build Status](https://img.shields.io/travis/hollowverse/hollowbot.svg)](https://travis-ci.org/hollowverse/hollowbot)
[![Greenkeeper badge](https://badges.greenkeeper.io/hollowverse/hollowbot.svg)](https://greenkeeper.io/hollowverse/hollowbot)
[![Discord Badge](https://img.shields.io/discord/308394001789353985.svg)](https://discordapp.com/invite/KmnPYnu)


## Information

HollowBot is our custom ChatOps solution and it functions as a control interface to our [Release Manager](https://github.com/hollowverse/release-manager). It also provides access to critical information like our latest build status or other necessary metrics. HollowBot lives on our Discord server.

## Getting started

### Prerequisites

* Install latest stable [Node.js](https://nodejs.org/en/)
* Install [Yarn](https://yarnpkg.com/lang/en/docs/install/) globally.
* Install dependencies: `yarn install` in this directory

## Development

* Run `yarn bot/dev` to run HollowBot on development mode. Nodemon will automatically refresh it on changes.
* Run `yarn bot/prod` to run HollowBot on production mode.

## Current functionality

* Type `!commands` to get the full list of commands available.

## License

This is free and unencumbered software released into the public domain. See the [LICENSE.md](./LICENSE.md) file for details.