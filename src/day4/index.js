const logTimed = require('../log-timed');
const readInput = require('../read-input');
const { part1, part2 } = require('./solution');

function run() {
  readInput('4', (data) => {
    logTimed('4.1', () => part1(data));
    logTimed('4.2', () => part2(data));
  });
}

module.exports = run;
