const { transpose2d } = require('../array-fns');
const { sum } = require('../reducers');

const parse = (input) => {
  const [drawInput, ...boardsInput] = input.split('\n\n');
  return [
    drawInput.trim().split(',').map(Number),
    boardsInput.filter(Boolean).map((boardInput) =>
      boardInput
        .split('\n')
        .filter(Boolean)
        .map((line) => line.trim().split(/\s+/).map(Number))
    ),
  ];
};

const bingoRow = (row) => row.every((cell) => cell === -1);

const bingo = (board) =>
  board.some(bingoRow) || transpose2d(board).some(bingoRow);

const winningState = (board, draw, start = 0) => {
  const newBoard = board.map((row) =>
    row.map((cell) => (cell === draw[start] ? -1 : cell))
  );
  if (start >= draw.length) {
    return [null, newBoard];
  }
  if (bingo(newBoard)) {
    return [start, newBoard];
  }
  return winningState(newBoard, draw, start + 1);
};

const sumRemaining = (board) =>
  board
    .flat()
    .filter((cell) => cell >= 0)
    .reduce(sum, 0);

const part1 = (input) => {
  const [draw, boards] = parse(input);

  const [winningIndex, winningBoard] = boards
    .map((board) => winningState(board, draw))
    .sort(([winIdx1], [winIdx2]) => winIdx1 - winIdx2)[0];

  return draw[winningIndex] * sumRemaining(winningBoard);
};

module.exports = { part1, parse, winningState };
