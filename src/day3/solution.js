/* eslint-disable no-loop-func */
/* eslint-disable no-bitwise */
const { sum } = require('../reducers');

const findBy = (values, filterBitFn) => {
  let i = 0;
  const valueLen = values[0].length;
  let candidates = [...values];

  while (i < valueLen && candidates.length > 1) {
    const filterBit = filterBitFn(candidates, i);
    candidates = candidates.filter((value) => value[i] === filterBit);
    i += 1;
  }

  if (candidates.length !== 1) {
    throw new Error('Could not reduce candidates to single matching value');
  }

  return candidates[0];
};

const mostCommonBit = (values, i) =>
  Math.round(values.map((v) => v[i]).reduce(sum, 0) / values.length);

const leastCommonBit = (values, i) =>
  Number(!Math.round(values.map((v) => v[i]).reduce(sum, 0) / values.length));

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

const part2 = (input) => {
  const values = input.map((line) => line.split('').map(Number));

  const oxygenGeneratorRating = parseInt(
    findBy(values, mostCommonBit).join(''),
    2
  );
  const CO2ScrubberRating = parseInt(
    findBy(values, leastCommonBit).join(''),
    2
  );

  return oxygenGeneratorRating * CO2ScrubberRating;
};

module.exports = { part1, part2 };
