const isDiagonal = ([[x1, y1], [x2, y2]]) => x1 !== x2 && y1 !== y2;

const expandLine = ([[x1, y1], [x2, y2]]) => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.max(Math.abs(dx), Math.abs(dy));
  const expanded = Array(len + 1)
    .fill(0)
    .map((_, i) => [x1 + (i * dx) / len, y1 + (i * dy) / len]);
  return expanded;
};

const pointString = (coords) => coords.join(',');

const equalsPrevious = (item, i, arr) => item === arr[i - 1];

const part1 = (lines) =>
  new Set(
    lines
      .filter((line) => !isDiagonal(line))
      .map(expandLine)
      .map((pointList) => pointList.map(pointString))
      .flat()
      .sort()
      .filter(equalsPrevious)
  ).size;

const part2 = (lines) =>
  new Set(
    lines
      .map(expandLine)
      .map((pointList) => pointList.map(pointString))
      .flat()
      .sort()
      .filter(equalsPrevious)
  ).size;

module.exports = { part1, part2, isDiagonal, expandLine };
