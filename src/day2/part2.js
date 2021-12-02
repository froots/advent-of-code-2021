const reducer = ([h, d, aim], [direction, dist]) => {
  switch (direction) {
    case 'forward':
      return [h + dist, d + aim * dist, aim];
    case 'down':
      return [h, d, aim + dist];
    case 'up':
      return [h, d, aim - dist];
    default:
      return [h, d, aim];
  }
};

const part2 = (input) => {
  const instructions = input
    .map((instr) => instr.split(' '))
    .map(([direction, dist]) => [direction, Number(dist)]);
  const [h, d] = instructions.reduce(reducer, [0, 0, 0]);
  return h * d;
};

module.exports = part2;
