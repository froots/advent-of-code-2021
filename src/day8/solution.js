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

const UNIQUE_LENGTHS_ONLY = [...UNIQUE_LENGTHS.keys()];

const part1 = (input) =>
  parse(input)
    .map(({ outputValues }) =>
      outputValues.filter((val) => UNIQUE_LENGTHS_ONLY.includes(val.length))
    )
    .flat().length;

module.exports = { parse, part1 };
