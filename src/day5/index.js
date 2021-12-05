const logTimed = require('../log-timed');
const readInput = require('../read-input');
const parse = require('./parse');
const { part1, part2 } = require('./solution');

function run() {
  readInput('5', (data) => {
    const input = parse(data);

    logTimed('5.1', () => part1(input));
    logTimed('5.2', () => part2(input));
  });
}

module.exports = run;
