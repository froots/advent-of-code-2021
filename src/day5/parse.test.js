const parse = require('./parse');

test('5 - Parses input to list of coordinate start and end points', () => {
  const input = `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
`;
  expect(parse(input)).toEqual([
    [
      [0, 9],
      [5, 9],
    ],
    [
      [8, 0],
      [0, 8],
    ],
    [
      [9, 4],
      [3, 4],
    ],
  ]);
});
