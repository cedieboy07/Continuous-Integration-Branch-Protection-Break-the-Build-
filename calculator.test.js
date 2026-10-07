const { add, subtract } = require('./calculator');

test('adds two numbers correctly', () => {
    expect(add(5, 3)).toBe(8);
});

test('subtracts two numbers correctly', () => {
    expect(subtract(5, 3)).toBe(2);
});