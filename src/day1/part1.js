module.exports = function countIncreases(depths) {
  return depths.filter(
    (currentDepth, i) => i !== 0 && currentDepth > depths[i - 1]
  ).length;
};
