const subtract = require('./subtract');

test('subtract 30-5 to equal 25', () => {
  expect(subtract(30, 5)).toBe(25);
});