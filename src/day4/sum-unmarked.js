const { sum } = require('../reducers');

const sumUnmarked = (board) =>
  board
    .flat()
    .filter((n) => n !== 'X')
    .reduce(sum, 0);

module.exports = sumUnmarked;
