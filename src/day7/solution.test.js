const { part1, part2 } = require('./solution');

test('7.1 Calculates optimum position and fuel consumption', () => {
  const input = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];
  expect(part1(input)).toEqual([2, 37]);
});

test('7.2 Calculates optimum position and fuel consumption', () => {
  const input = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];
  expect(part2(input)).toEqual([5, 168]);
});
