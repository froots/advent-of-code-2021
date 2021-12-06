const logTimed = require('../log-timed');
const readInput = require('../read-input');
const { part1 } = require('./solution');

function run() {
  readInput('6', (data) => {
    const input = data.trim().split(',').map(Number);
    logTimed('6.1', () => part1(input, 80));
  });
}

module.exports = run;
