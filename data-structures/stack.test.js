const createStack = require('./stack');

describe('', () => {
    const testStack = createStack();

    test('default values', () => {
        expect(testStack.quantity).toBe(0);
        expect(testStack.storage).toEqual({});
        expect(testStack.maxSize).toBe(5);
    });
});
