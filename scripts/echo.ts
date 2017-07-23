import * as hubot from 'hubot';
import * as Chance from 'chance';

const chance = new Chance();

module.exports = (robot: hubot.Robot) => {
  robot.respond(/echo (.+)$/, res => {
    res.reply(res.match[1]);
  });

  robot.respond(/flip a coin/, res => {
    res.reply(chance.pickone(['head', 'tails']));
  });
};
