const { sum } = require('../reducers');

const CLOSE_MAP = {
  ')': '(',
  ']': '[',
  '}': '{',
  '>': '<',
};

const OPEN_MAP = {
  '(': ')',
  '[': ']',
  '{': '}',
  '<': '>',
};

const SYNTAX_ERROR_SCORES = {
  ')': 3,
  ']': 57,
  '}': 1197,
  '>': 25137,
};

const COMPLETION_SCORES = {
  ')': 1,
  ']': 2,
  '}': 3,
  '>': 4,
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
    completion:
      !corrupt &&
      chunkStack
        .reverse()
        .map((opening) => OPEN_MAP[opening])
        .join(''),
  };
};

const parse = (input) =>
  input
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

const completionScore = (completionString) =>
  completionString
    .split('')
    .reduce(
      (score, completion) => score * 5 + COMPLETION_SCORES[completion],
      0
    );

const part1 = (input) =>
  parse(input)
    .map(analyse)
    .filter((lineObj) => lineObj.corrupt)
    .map((lineObj) => SYNTAX_ERROR_SCORES[lineObj.corrupt])
    .reduce(sum, 0);

const part2 = (input) => {
  const scores = parse(input)
    .map(analyse)
    .filter((lineObj) => !lineObj.corrupt)
    .map((lineObj) => completionScore(lineObj.completion))
    .sort((a, b) => a - b);
  return scores[Math.floor(scores.length / 2)];
};

module.exports = { part1, part2, analyse, completionScore };
