const { transpose2d } = require('../array-fns');

const checkRows = (board) => board.some((row) => row.every((n) => n < 0));

const isBingo = (board) => checkRows(board) || checkRows(transpose2d(board));

module.exports = isBingo;
