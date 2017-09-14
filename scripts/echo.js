/**
 * @param {Hubot.Robot} robot
 */
module.exports = robot => {
  robot.respond(/echo (.+)$/i, res => {
    res.reply(res.match[1]);
  });
};
