const coin = ['heads', 'tails'];

/**
 * @param {Hubot.Robot} robot
 */
module.exports = robot => {
  robot.respond(/flip a coin/i, res => {
    res.random(coin);
  });
};
