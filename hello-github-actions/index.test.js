const hello = require('./index');
test('returns the correct message', () => {
  expect(hello()).toBe('Hello, GitHub Actions!');
});
