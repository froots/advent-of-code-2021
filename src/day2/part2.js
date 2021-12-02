const { product } = require('../reducers');

const processInstruction = ([h, d, aim], [dir, dist]) => {
  if (dir === 'forward') {
    return [h + dist, d + aim * dist, aim];
  }
  const aimMod = dir === 'down' ? 1 : -1;
  return [h, d, aim + aimMod * dist];
};

const part2 = (input) =>
  input
    .map((instr) => instr.split(' '))
    .map(([direction, dist]) => [direction, Number(dist)])
    .reduce(processInstruction, [0, 0, 0])
    .slice(0, 2)
    .reduce(product, 1);

module.exports = part2;
