const markBoards = require('./mark-boards');

const boards = [
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  [
    [9, 11, 12],
    [13, 14, 15],
    [16, 17, 18],
  ],
];

test('4 - markBoards gives unchanged boards when provided number matches nothing', () => {
  const marked = markBoards(boards, 99);
  expect(marked).toEqual(boards);
});

test('4 - markBoards changes one board when provided number matches', () => {
  const marked = markBoards(boards, 1);
  expect(marked).toEqual([
    [
      [-1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    boards[1],
  ]);
});

test('4 - markBoards changes both boards when provided number matches', () => {
  const marked = markBoards(boards, 9);
  expect(marked).toEqual([
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, -9],
    ],
    [
      [-9, 11, 12],
      [13, 14, 15],
      [16, 17, 18],
    ],
  ]);
});

test('4 - markBoards marks cumulatively', () => {
  const marked = markBoards(markBoards(boards, 9), 1);
  expect(marked).toEqual([
    [
      [-1, 2, 3],
      [4, 5, 6],
      [7, 8, -9],
    ],
    [
      [-9, 11, 12],
      [13, 14, 15],
      [16, 17, 18],
    ],
  ]);
});
