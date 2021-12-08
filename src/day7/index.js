const logTimed = require('../log-timed');
const readInput = require('../read-input');
const { part1 } = require('./solution');

function run() {
  readInput('7', (data) => {
    const input = data.trim().split(',').map(Number);
    logTimed('7.1', () => {
      const [_, consumption] = part1(input);
      return consumption;
    });
  });
}

module.exports = run;
