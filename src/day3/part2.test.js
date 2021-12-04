const part2 = require('./part2');

test('3.2 calculates oxygen generator rating and CO2 scrubber rating from input and multiplies them', () => {
  const input = [
    '00100',
    '11110',
    '10110',
    '10111',
    '10101',
    '01111',
    '00111',
    '11100',
    '10000',
    '11001',
    '00010',
    '01010',
  ];
  expect(part2(input)).toBe(230);
});
