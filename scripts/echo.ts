import * as hubot from 'hubot';

module.exports = (robot: hubot.Robot) => {
  robot.hear(/echo (.+)$/, (res) => {
    res.reply(res.match[1]);
  });
};
