const parse = (data) =>
  data
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.split(' | ').map((side) => side.split(' ')));

const part1 = (input) => 1;

module.exports = { parse, part1 };
