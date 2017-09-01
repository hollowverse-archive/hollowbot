const coin = ['heads', 'tails'];

/**
 * @param {Hubot.Robot} robot
 */
module.exports = robot => {
  robot.respond(/flip a coin/, res => {
    res.random(coin);
  });
};
