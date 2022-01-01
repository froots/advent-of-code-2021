const logTimed = require('../log-timed');
const readInput = require('../read-input');
const { part1, part2 } = require('./solution');

function run() {
  readInput('9', (data) => {
    logTimed('9.1', () => part1(data));
    logTimed('9.2', () => part2(data));
  });
}

module.exports = run;
