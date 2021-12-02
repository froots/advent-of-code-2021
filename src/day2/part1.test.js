const part1 = require('./part1');

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
