const { part1, part2, parse, winningState } = require('./solution');

const input = `7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

22 13 17 11  0
8  2 23  4 24
21  9 14 16  7
6 10  3 18  5
1 12 20 15 19

3 15  0  2 22
9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
2  0 12  3  7
`;

test('4 - Parses input to drawn numbers and boards', () => {
  const [draw, boards] = parse(input);
  expect(draw).toEqual([
    7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18,
    20, 8, 19, 3, 26, 1,
  ]);
  expect(boards).toHaveLength(3);
  expect(boards[0]).toEqual([
    [22, 13, 17, 11, 0],
    [8, 2, 23, 4, 24],
    [21, 9, 14, 16, 7],
    [6, 10, 3, 18, 5],
    [1, 12, 20, 15, 19],
  ]);
});

test('4.1 Winning score of first card to bingo', () => {
  expect(part1(input)).toBe(4512);
});

test('4.2 Score of last card to bingo', () => {
  expect(part2(input)).toBe(1924);
});

test('4 - winningState converts starting board to its winning state given a draw', () => {
  const [draw, boards] = parse(input);
  const expectedBoard = [
    [-1, -1, -1, -1, -1],
    [10, 16, 15, -1, 19],
    [18, 8, -1, 26, 20],
    [22, -1, 13, 6, -1],
    [-1, -1, 12, 3, -1],
  ];
  const [winningIndex, winningBoard] = winningState(boards[2], draw);
  expect(winningIndex).toBe(11);
  expect(winningBoard).toEqual(expectedBoard);
});
