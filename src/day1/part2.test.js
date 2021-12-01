const part2 = require('./part2');

test('Day 1.2 counts the number of increases in a sequence of three-part windows', () => {
  const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
  expect(part2(input)).toBe(5);
});
