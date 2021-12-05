/* eslint-disable prefer-const */

const parse = require('./parse');
const markBoards = require('./mark-boards');
const isBingo = require('./is-bingo');
const sumUnmarked = require('./sum-unmarked');

const part1 = (input) => {
  let [draw, boards] = parse(input);
  let n;
  let winningBoards = [];

  while (!winningBoards.length && draw.length) {
    n = draw.shift();
    boards = markBoards(boards, n);
    winningBoards = boards.filter(isBingo);
  }

  if (winningBoards.length !== 1) {
    throw new Error('Could not find single winning board');
  }

  return sumUnmarked(winningBoards[0]) * n;
};

module.exports = part1;
