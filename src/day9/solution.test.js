const { part1 } = require('./solution');

const input = `2199943210
3987894921
9856789892
8767896789
9899965678`;

const input2 = `2199943200
3987894921
9856789892
8767896789
9899965678`;

test('9.1: Calculates sum of risk levels of low points on given heightmap', () => {
  expect(part1(input)).toBe(15);
  expect(part1(input2)).toBe(14);
});
