const answer = require('./');

describe('answer', () => {
  it('should be a function', () => {
    expect(typeof answer).toBe('function');
  });

  it('should return 42', () => {
    expect(answer()).toBe(42);
  });
});
