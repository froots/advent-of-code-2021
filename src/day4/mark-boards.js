const markBoards = (boards, draw) =>
  boards.map((board) =>
    board.map((row) => row.map((cell) => (cell === draw ? 'X' : cell)))
  );

module.exports = markBoards;
