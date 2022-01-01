const { partition } = require('./array-fns');

test('partition split array into two according to filter function', () => {
  const input = [1, 3, 4, 6, 8, 12, 15, 25, 22, 80];
  const isEven = (n) => n % 2 === 0;
  const [trueArr, falseArr] = partition(input, isEven);
  expect(trueArr).toEqual([4, 6, 8, 12, 22, 80]);
  expect(falseArr).toEqual([1, 3, 15, 25]);
});
