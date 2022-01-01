const { part1, analyse } = require('./solution');

const example = `[({(<(())[]>[[{[]{<()<>>
[(()[<>])]({[<{<<[]>>(
{([(<{}[<>[]}>{[]{[(<()>
(((({<>}<{<{<>}{[]{[]{}
[[<[([]))<([[{}[[()]]]
[{[{({}]{}}([{[{{{}}([]
{<[[]]>}<{[{[{[]{()[[[]
[<(<(<(<{}))><([]([]()
<{([([[(<>()){}]>(<<{{
<{([{{}}[<[[[<>{}]]]>[]]
`;

test('10.1: Calculates total syntax error score for corrupted lines', () => {
  expect(part1(example)).toBe(26397);
});

test('10: Analyse returns correct data object for non-corrupt lines', () => {
  const valid = '{}[]';
  expect(analyse(valid)).toEqual({
    line: '{}[]',
    corrupt: undefined,
  });
});

test('10: Analyse returns correct data object for corrupt lines', () => {
  const invalid = '{{{[]]}}';
  expect(analyse(invalid)).toEqual({
    line: '{{{[]]}}',
    corrupt: ']',
  });
});
