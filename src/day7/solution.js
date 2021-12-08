const { sum } = require('../reducers');

const median = (arr) => {
  const sorted = [...arr].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }
  return sorted[middle];
};

const part1 = (startingPositions) => {
  const med = median(startingPositions);
  const consumption = startingPositions
    .map((pos) => Math.abs(pos - med))
    .reduce(sum, 0);

  return [med, consumption];
};

module.exports = { part1 };
