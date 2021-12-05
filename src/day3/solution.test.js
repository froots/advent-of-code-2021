const { part1, part2 } = require('./solution');

test('3.1 Calculates power consumption (gamma * epsilon) value for list of binary values', () => {
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
  expect(part1(input)).toBe(198);
});

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
