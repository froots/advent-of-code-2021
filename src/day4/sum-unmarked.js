const { sum } = require('../reducers');

const sumUnmarked = (board) =>
  board
    .flat()
    .filter((n) => n > 0)
    .reduce(sum, 0);

module.exports = sumUnmarked;
