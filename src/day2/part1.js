const { vScale, vSum } = require('../vector');
const { product } = require('../reducers');

const vecNames = {
  forward: [1, 0],
  down: [0, 1],
  up: [0, -1],
};

const part1 = (input) =>
  input
    .map((instr) => instr.split(' '))
    .map(([dir, dist]) => vScale(vecNames[dir], Number(dist)))
    .reduce(vSum, [0, 0])
    .reduce(product, 1);

module.exports = part1;
