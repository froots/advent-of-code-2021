const isBingo = require('./is-bingo');

test('4 - isBingo false when no marked numbers', () => {
  const board = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  expect(isBingo(board)).toBeFalsy();
});

test('4 - isBingo false when no completed rows or columns', () => {
  const board = [
    [-1, 2, 3],
    [4, -5, 6],
    [-7, 8, -9],
  ];
  expect(isBingo(board)).toBeFalsy();
});

test('4 - isBingo true when there is a completed row', () => {
  const board = [
    [-1, 2, 3],
    [4, -5, 6],
    [-7, -8, -9],
  ];
  expect(isBingo(board)).toBeTruthy();
});
