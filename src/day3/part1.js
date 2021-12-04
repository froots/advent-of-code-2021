/* eslint-disable no-bitwise */

const part1 = (input) => {
  const lineLen = input[0].length;
  const popularBits = input
    .map((line) => line.split('').map(Number))
    .reduce(
      (tally, line) => tally.map((c, i) => c + line[i]),
      Array(lineLen).fill(0)
    )
    .map((total) => Math.round(total / input.length));
  // Use BigInt here to avoid JavaScript default signed binary ints
  const gamma = BigInt(`0b${popularBits.join('')}`);
  // Bitwise NOT (~) with BigInt's unsigned int converter `asUintN`
  const epsilon = BigInt.asUintN(lineLen, ~gamma);
  return Number(gamma * epsilon);
};

module.exports = part1;
