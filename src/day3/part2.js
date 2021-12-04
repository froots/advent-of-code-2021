/* eslint-disable no-loop-func */

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

module.exports = part2;
