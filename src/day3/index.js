const logTimed = require('../log-timed');
const readInput = require('../read-input');
const part1 = require('./part1');
const part2 = require('./part2');

function run() {
  readInput('3', (data) => {
    const input = data.split('\n').filter((line) => line);

    logTimed('3.1', () => part1(input));
    logTimed('3.2', () => part2(input));
  });
}

module.exports = run;
