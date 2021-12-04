const transpose2d = (arr) => arr[0].map((_, c) => arr.map((r) => r[c]));

module.exports = { transpose2d };
