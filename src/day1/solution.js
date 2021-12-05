const hasIncreased = (current, i, arr) => i !== 0 && current > arr[i - 1];

const part1 = (depths) => depths.filter(hasIncreased).length;

const part2 = (depths) =>
  depths
    .map((depth, i, arr) => i > 1 && arr[i] + arr[i - 1] + arr[i - 2])
    .filter((sum) => !!sum)
    .filter(hasIncreased).length;

module.exports = { part1, part2 };
