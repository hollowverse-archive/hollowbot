/**
 * @param {Hubot.Robot} robot
 */
module.exports = robot => {
  robot.respond(/echo (.+)$/, res => {
    res.reply(res.match[1]);
  });
};
