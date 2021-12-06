const { solution } = require('./solution');

test('6.1 Calculates number of fish after given number of days', () => {
  const input = [3, 4, 3, 1, 2];
  expect(solution(input, 18)).toBe(26);
  expect(solution(input, 80)).toBe(5934);
  expect(solution(input, 256)).toBe(26984457539);
});
