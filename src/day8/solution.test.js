const { createMapper, parse, part1, part2 } = require('./solution');

const input = `be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb | fdgacbe cefdb cefbgd gcbe
edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec | fcgedb cgb dgebacf gc
fgaebd cg bdaec gdafb agbcfd gdcbef bgcad gfac gcb cdgabef | cg cg fdcagb cbg
fbegcd cbd adcefb dageb afcb bc aefdc ecdab fgdeca fcdbega | efabcd cedba gadfec cb
aecbfdg fbg gf bafeg dbefa fcge gcbea fcaegb dgceab fcbdga | gecf egdcabf bgf bfgea
fgeab ca afcebg bdacfeg cfaedg gcfdb baec bfadeg bafgc acf | gebdcfa ecba ca fadegcb
dbcfg fgd bdegcaf fgec aegbdf ecdfab fbedc dacgb gdcebf gf | cefg dcbef fcge gbcadfe
bdfegc cbegaf gecbf dfcage bdacg ed bedf ced adcbefg gebcd | ed bcgafe cdgba cbgef
egadfb cdbfeg cegd fecab cgb gbdefca cg fgcdab egfdb bfceg | gbdfcae bgc cg cgb
gcafb gcf dcaebfg ecagb gf abcdeg gaef cafbge fdbac fegbdc | fgae cfgab fg bagce
`;

test('8: parse parses input', () => {
  const data = `be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb | fdgacbe cefdb cefbgd gcbe
edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec | fcgedb cgb dgebacf gc
`;
  const expected = [
    {
      signalPatterns: [
        'be',
        'cfbegad',
        'cbdgef',
        'fgaecd',
        'cgeb',
        'fdcge',
        'agebfd',
        'fecdb',
        'fabcd',
        'edb',
      ],
      outputValues: ['fdgacbe', 'cefdb', 'cefbgd', 'gcbe'],
    },
    {
      signalPatterns: [
        'edbfga',
        'begcd',
        'cbg',
        'gc',
        'gcadebf',
        'fbgde',
        'acbgfd',
        'abcde',
        'gfcbed',
        'gfec',
      ],
      outputValues: ['fcgedb', 'cgb', 'dgebacf', 'gc'],
    },
  ];
  expect(parse(data)).toEqual(expected);
});

test('8.1 counts the total of digits with unique number of segments', () => {
  expect(part1(input)).toBe(26);
});

test('8.2 sums all the decoded output values', () => {
  expect(part2(input)).toBe(61229);
});

test.only('8: deduce mapping', () => {
  const signalPatterns = [
    'acedgfb',
    'cdfbe',
    'gcdfa',
    'fbcad',
    'dab',
    'cefabd',
    'cdfgeb',
    'eafb',
    'cagedb',
    'ab',
  ];
  const mapper = createMapper(signalPatterns);
  // expect(mapper('cagedb')).toBe('0');
  expect(mapper('ab')).toBe('1');
  // expect(mapper('gcdfa')).toBe('2');
  expect(mapper('fbcad')).toBe('3');
  expect(mapper('eafb')).toBe('4');
  // expect(mapper('cdfbe')).toBe('5');
  // expect(mapper('cdfgeb')).toBe('6');
  expect(mapper('dab')).toBe('7');
  expect(mapper('acedgfb')).toBe('8');
  // expect(mapper('cefabd')).toBe('9');
});
