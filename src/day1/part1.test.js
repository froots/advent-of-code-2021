const part1 = require('./part1');

test('Day 1.1 counts the number of increases in a sequence', () => {
  const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
  expect(part1(input)).toBe(7);
});
