const { part1, part2 } = require('./solution');

test('2.1 calculates product of horizontal positions after instructions', () => {
  const input = [
    'forward 5',
    'down 5',
    'forward 8',
    'up 3',
    'down 8',
    'forward 2',
  ];
  expect(part1(input)).toBe(150);
});

test('2.2 calculates product of horizontal positions after modified instructions', () => {
  const input = [
    'forward 5',
    'down 5',
    'forward 8',
    'up 3',
    'down 8',
    'forward 2',
  ];
  expect(part2(input)).toBe(900);
});
