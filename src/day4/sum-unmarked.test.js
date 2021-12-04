const sumUnmarked = require('./sum-unmarked');

test('4 - Sums unmarked numbers from a board', () => {
  const board = [
    [1, 2, -3],
    [4, -5, -6],
    [7, 8, -9],
  ];
  expect(sumUnmarked(board)).toBe(22);
});
