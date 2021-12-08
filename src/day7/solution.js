const { sum } = require('../reducers');

const median = (arr) => {
  const sorted = [...arr].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }
  return sorted[middle];
};

const triangleSum = (n) => (n * (n + 1)) / 2;

const part1 = (startingPositions) => {
  const med = median(startingPositions);
  const consumption = startingPositions
    .map((pos) => Math.abs(pos - med))
    .reduce(sum, 0);

  return [med, consumption];
};

const part2 = (startingPositions) => {
  const sortedPositions = [...startingPositions].sort((a, b) => a - b);
  const min = sortedPositions[0];
  const max = sortedPositions[sortedPositions.length - 1];
  return Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min)
    .map((p1) => [
      p1,
      sortedPositions
        .map((p2) => triangleSum(Math.abs(p2 - p1)))
        .reduce(sum, 0),
    ])
    .sort((a, b) => a[1] - b[1])[0];
};

module.exports = { part1, part2 };
