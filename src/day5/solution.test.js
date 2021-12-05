const { part1, part2, isDiagonal, expandLine } = require('./solution');

const input = [
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
  [
    [2, 2],
    [2, 1],
  ],
  [
    [7, 0],
    [7, 4],
  ],
  [
    [6, 4],
    [2, 0],
  ],
  [
    [0, 9],
    [2, 9],
  ],
  [
    [3, 4],
    [1, 4],
  ],
  [
    [0, 0],
    [8, 8],
  ],
  [
    [5, 5],
    [8, 2],
  ],
];

test('5.1 - Calculates number of points at least two lines overlap', () => {
  expect(part1(input)).toBe(5);
});

test('5.2 - Calculates number of points at least two lines overlap including diagonals', () => {
  expect(part2(input)).toBe(12);
});

test('5.1 - isDiagonal returns false for non-diagonals', () => {
  const horizontal = input[0];
  const vertical = input[3];
  expect(isDiagonal(horizontal)).toBeFalsy();
  expect(isDiagonal(vertical)).toBeFalsy();
});

test('5.1 - isDiagonal returns true for diagonals', () => {
  const diagonal1 = input[1];
  const diagonal2 = input[5];
  expect(isDiagonal(diagonal1)).toBeTruthy();
  expect(isDiagonal(diagonal2)).toBeTruthy();
});

test('5.1 - expandLine converts coordinate ends to full point list for horizontal', () => {
  const horizontal = input[0];
  expect(expandLine(horizontal)).toEqual([
    [0, 9],
    [1, 9],
    [2, 9],
    [3, 9],
    [4, 9],
    [5, 9],
  ]);
});

test('5.1 - expandLine converts coordinate ends to full point list for vertical', () => {
  const vertical = input[3];
  expect(expandLine(vertical)).toEqual([
    [2, 2],
    [2, 1],
  ]);
});
