const { part1, part2, analyse, completionScore } = require('./solution');

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
    completion: '',
  });
});

test('10: Analyse returns correct data object for corrupt lines', () => {
  const invalid = '{{{[]]}}';
  expect(analyse(invalid)).toEqual({
    line: '{{{[]]}}',
    corrupt: ']',
    completion: false,
  });
});

test('10: Analyse returns correct data object for incomplete lines', () => {
  const incomplete = '{<([()';
  expect(analyse(incomplete)).toEqual({
    line: '{<([()',
    corrupt: undefined,
    completion: '])>}',
  });
});

test('10: lineCompletionScore calculates completion score from completion string', () => {
  expect(completionScore('}}]])})]')).toBe(288957);
  expect(completionScore(')}>]})')).toBe(5566);
  expect(completionScore('}}>}>))))')).toBe(1480781);
  expect(completionScore(']]}}]}]}>')).toBe(995444);
  expect(completionScore('])}>')).toBe(294);
});

test('10.2: Calculates middle completion score of uncompleted lines', () => {
  expect(part2(example)).toBe(288957);
});
