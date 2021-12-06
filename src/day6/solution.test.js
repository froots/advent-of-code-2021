const { part1 } = require('./solution');

test('6.1 Calculates number of fish after given number of days', () => {
  const input = [3, 4, 3, 1, 2];
  expect(part1(input, 18)).toBe(26);
  expect(part1(input, 80)).toBe(5934);
});
