const add = (a, b) => a + b;

test('should add two numbers', () => {
    const result = add(1, 2);
    expect(result).toBe(3);
});
