const { vScale, vSum } = require('../vector');
const { product } = require('../reducers');

const vecNames = {
  forward: [1, 0],
  down: [0, 1],
  up: [0, -1],
};

const processInstruction = ([h, d, aim], [dir, dist]) => {
  if (dir === 'forward') {
    return [h + dist, d + aim * dist, aim];
  }
  const aimMod = dir === 'down' ? 1 : -1;
  return [h, d, aim + aimMod * dist];
};

const part1 = (input) =>
  input
    .map((instr) => instr.split(' '))
    .map(([dir, dist]) => vScale(vecNames[dir], Number(dist)))
    .reduce(vSum, [0, 0])
    .reduce(product, 1);

const part2 = (input) =>
  input
    .map((instr) => instr.split(' '))
    .map(([direction, dist]) => [direction, Number(dist)])
    .reduce(processInstruction, [0, 0, 0])
    .slice(0, 2)
    .reduce(product, 1);

module.exports = { part1, part2 };
