const {
  part1,
  part2,
  parse,
  lowPoints,
  neighbours,
  basinMap,
} = require('./solution');

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

test('9: parse converts input to Map with coords as keys and heights as values', () => {
  const parsed = parse(input);
  expect(parsed.size).toBe(50);
  expect(parsed.get('0,0')).toBe(2);
  expect(parsed.get('9,4')).toBe(8);
});

test('9: lowPoints returns map of low points only', () => {
  const actual = lowPoints(parse(input));
  expect(actual.size).toBe(4);
  expect(actual.get('1,0')).toBe(1);
  expect(actual.get('9,0')).toBe(0);
  expect(actual.get('2,2')).toBe(5);
  expect(actual.get('6,4')).toBe(5);
});

test('9: neighbours returns map of neighbour cells', () => {
  const heightMap = parse(input);
  const n1 = neighbours(heightMap, 0, 0);
  const n2 = neighbours(heightMap, 1, 0);
  const n3 = neighbours(heightMap, 1, 1);

  expect(n1.size).toBe(2);
  expect(n1.get('1,0')).toBe(1);
  expect(n1.get('0,1')).toBe(3);

  expect(n2.size).toBe(3);
  expect(n2.get('2,0')).toBe(9);
  expect(n2.get('1,1')).toBe(9);
  expect(n2.get('0,0')).toBe(2);

  expect(n3.size).toBe(4);
  expect(n3.get('1,0')).toBe(1);
  expect(n3.get('2,1')).toBe(8);
  expect(n3.get('1,2')).toBe(8);
  expect(n3.get('0,1')).toBe(3);
});

test('9: basinMap resolves full basin given starting low point', () => {
  const heightMap = parse(input);
  const basin1 = basinMap(heightMap, '1,0');
  expect(basin1.size).toBe(3);
  const basin2 = basinMap(heightMap, '9,0');
  expect(basin2.size).toBe(9);
  const basin3 = basinMap(heightMap, '2,2');
  expect(basin3.size).toBe(14);
  const basin4 = basinMap(heightMap, '6,4');
  expect(basin4.size).toBe(9);
});

test('9.2: Multiples size of three largest basins', () => {
  expect(part2(input)).toBe(1134);
});
