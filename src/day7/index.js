const logTimed = require('../log-timed');
const readInput = require('../read-input');
const { part1, part2 } = require('./solution');

function run() {
  readInput('7', (data) => {
    const input = data.trim().split(',').map(Number);
    logTimed('7.1', () => part1(input)[1]);
    logTimed('7.2', () => part2(input)[1]);
  });
}

module.exports = run;
