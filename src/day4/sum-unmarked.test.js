const sumUnmarked = require('./sum-unmarked');

test('4 - Sums unmarked numbers from a board', () => {
  const board = [
    [1, 2, 'X'],
    [4, 'X', 'X'],
    [7, 8, 'X'],
  ];
  expect(sumUnmarked(board)).toBe(22);
});
