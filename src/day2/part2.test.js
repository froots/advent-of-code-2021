const part2 = require('./part2');

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
