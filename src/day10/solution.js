const { sum } = require('../reducers');

const CLOSE_MAP = {
  ')': '(',
  ']': '[',
  '}': '{',
  '>': '<',
};

const SYNTAX_ERROR_SCORES = {
  ')': 3,
  ']': 57,
  '}': 1197,
  '>': 25137,
};

const analyse = (line) => {
  let corrupt;
  const chunkStack = [];
  let workingLine = line;

  while (!corrupt && workingLine !== '') {
    const char = workingLine.charAt(0);
    let opening;
    workingLine = workingLine.slice(1);

    switch (char) {
      case '(':
      case '[':
      case '{':
      case '<':
        chunkStack.push(char);
        break;
      case ')':
      case ']':
      case '}':
      case '>':
        if (!chunkStack.length) {
          corrupt = char;
          break;
        }
        opening = chunkStack.pop();
        if (opening !== CLOSE_MAP[char]) {
          corrupt = char;
          break;
        }
        break;
      default:
        throw new Error('Unexpected syntax character');
    }
  }

  return {
    line,
    corrupt,
  };
};

const part1 = (input) =>
  input
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map(analyse)
    .filter((lineObj) => lineObj.corrupt)
    .map((lineObj) => SYNTAX_ERROR_SCORES[lineObj.corrupt])
    .reduce(sum, 0);

module.exports = { part1, analyse };
