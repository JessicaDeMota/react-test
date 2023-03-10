const divide = require('./divide');

test('divides 24 / 6 to equal 4', () => {
  expect(divide(24, 6)).toBe(4);
});