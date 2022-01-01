const transpose2d = (arr) => arr[0].map((_, c) => arr.map((r) => r[c]));

const partition = (arr, filterFn) =>
  arr.reduce(
    ([trueArr, falseArr], item) =>
      filterFn(item)
        ? [[...trueArr, item], falseArr]
        : [trueArr, [...falseArr, item]],
    [[], []]
  );

module.exports = { transpose2d, partition };
