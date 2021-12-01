const logTimed = require('../log-timed');
const part1 = require('./part1');
const part2 = require('./part2');

function run() {
  logTimed('0.1', () => part1());
  logTimed('0.2', () => part2());
}

module.exports = run;
