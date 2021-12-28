const { sum } = require('../reducers');

const parse = (data) =>
  data
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [signalPatterns, outputValues] = line
        .split(' | ')
        .map((side) => side.split(' '));
      return { signalPatterns, outputValues };
    });

const UNIQUE_LENGTHS = new Map([
  [2, '1'],
  [3, '7'],
  [4, '4'],
  [7, '8'],
]);

const sorted = (pattern) => pattern.split('').sort().join('');

const createMapper = (signalPatterns) => {
  console.log('signalPatterns', signalPatterns);

  const lookup = new Map();

  // Create unique length mappings
  signalPatterns.forEach((pattern) => {
    const sortedPattern = sorted(pattern);

    if (UNIQUE_LENGTHS.has(pattern.length)) {
      lookup.set(sortedPattern, UNIQUE_LENGTHS.get(pattern.length));
    }
  });

  console.log('lookup', lookup);

  return (value) => lookup.get(sorted(value));
};

const resolve = ({ signalPatterns, outputValues }) => {
  const mapper = createMapper(signalPatterns);
  return parseInt(outputValues.map((value) => mapper(value)).join(''), 10);
};

const part1 = (input) =>
  parse(input)
    .map(({ outputValues }) =>
      outputValues.filter((val) => UNIQUE_LENGTHS.has(val.length))
    )
    .flat().length;

const part2 = (input) => {
  console.log('hi');
  return parse(input)
    .map((line) => resolve(line))
    .reduce(sum, 0);
};

module.exports = { createMapper, parse, part1, part2 };
