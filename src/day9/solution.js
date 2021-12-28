const { sum } = require('../reducers');

const isLowPoint = (height, x, y, heightMap) => {
  const up = heightMap[y - 1] && heightMap[y - 1][x];
  const right = heightMap[y][x + 1];
  const down = heightMap[y + 1] && heightMap[y + 1][x];
  const left = heightMap[y][x - 1];

  return (
    [up, right, down, left]
      .filter((adj) => adj !== undefined)
      .filter((adj) => adj <= height).length === 0
  );
};

const parse = (input) =>
  input
    .split('\n')
    .filter(Boolean)
    .map((line) => line.trim().split('').map(Number));

const part1 = (input) =>
  parse(input)
    .map((points, y, heightMap) =>
      points.filter((height, x) => isLowPoint(height, x, y, heightMap))
    )
    .flat()
    .map((point) => point + 1)
    .reduce(sum, 0);

module.exports = { part1 };
