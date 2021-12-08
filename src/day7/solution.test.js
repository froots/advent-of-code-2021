const { part1 } = require('./solution');

test('7.1 Calculates optimum position and fuel consumption', () => {
  const input = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];
  expect(part1(input)).toEqual([2, 37]);
});
