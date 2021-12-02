const logTimed = require('../log-timed');
const readInput = require('../read-input');
const part1 = require('./part1');
const part2 = require('./part2');

function run() {
  readInput('2', (data) => {
    const input = data.split('\n').filter((line) => line);

    logTimed('2.1', () => part1(input));
    logTimed('2.2', () => part2(input));
  });
}

module.exports = run;
