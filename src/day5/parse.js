const parsePair = (pair) => pair.split(',').map(Number);

const parseLine = (line) => line.split(' -> ').map(parsePair);

const parse = (input) => input.split('\n').filter(Boolean).map(parseLine);

module.exports = parse;
