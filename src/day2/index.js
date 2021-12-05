const logTimed = require('../log-timed');
const readInput = require('../read-input');
const { part1, part2 } = require('./solution');

function run() {
  readInput('2', (data) => {
    const input = data.split('\n').filter((line) => line);

    logTimed('2.1', () => part1(input));
    logTimed('2.2', () => part2(input));
  });
}

module.exports = run;
