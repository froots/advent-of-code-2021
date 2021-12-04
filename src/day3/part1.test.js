const part1 = require('./part1');

test('Calculates power consumption (gamma * epsilon) value for list of binary values', () => {
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
