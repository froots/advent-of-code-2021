const logTimed = require('../log-timed');
const readInput = require('../read-input');
const { part1 } = require('./solution');

function run() {
  readInput('4', (data) => {
    logTimed('4.1', () => part1(data));
  });
}

module.exports = run;
