const logTimed = require('../log-timed');
const readInput = require('../read-input');
const part1 = require('./part1');

function run() {
  readInput('2', (data) => {
    const input = data.split('\n').filter((line) => line);

    logTimed('2.1', () => part1(input));
  });
}

module.exports = run;
