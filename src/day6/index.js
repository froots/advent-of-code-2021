const logTimed = require('../log-timed');
const readInput = require('../read-input');
const { solution } = require('./solution');

function run() {
  readInput('6', (data) => {
    const input = data.trim().split(',').map(Number);
    logTimed('6.1', () => solution(input, 80));
    logTimed('6.2', () => solution(input, 256));
  });
}

module.exports = run;
