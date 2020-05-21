
const add = (a, b) => a + b;

test('should add two numbers', () => {
    const result = add(1, 2);
    if (result !== 3) {
        throw new Error('Invalid value!');
    }
});
