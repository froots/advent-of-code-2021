const hasIncreased = require('./has-increased');

module.exports = (depths) =>
  depths
    .map((depth, i, arr) => i > 1 && arr[i] + arr[i - 1] + arr[i - 2])
    .filter((sum) => !!sum)
    .filter(hasIncreased).length;
