const { sum } = require('../reducers');

const solution = (input, duration) => {
  const counts = input
    .sort((a, b) => a - b)
    .reduce((tally, item) => {
      const newTally = [...tally];
      newTally[item] += 1;
      return newTally;
    }, Array(9).fill(0));

  for (let i = 0; i < duration; i += 1) {
    const newCount = counts.shift();
    counts[6] += newCount;
    counts.push(newCount);
  }

  return counts.reduce(sum, 0);
};

module.exports = { solution };
