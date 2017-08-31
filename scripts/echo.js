const Chance = require('chance');

const chance = new Chance();

/**
 * @param {Hubot.Robot} robot
 */
module.exports = robot => {
  robot.respond(/echo (.+)$/, res => {
    res.reply(res.match[1]);
  });

  robot.respond(/flip a coin/, res => {
    res.reply(chance.pickone(['heads', 'tails']));
  });
};
