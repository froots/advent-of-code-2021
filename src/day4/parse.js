const parse = (input) => {
  const [drawInput, ...boardsInput] = input.split('\n\n');
  return [
    drawInput.split(',').map(Number),
    boardsInput.map((boardInput) =>
      boardInput.split('\n').map((line) => line.split(/\s+/).map(Number))
    ),
  ];
};

module.exports = parse;
