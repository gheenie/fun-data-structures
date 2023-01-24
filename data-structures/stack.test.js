const createStack = require('./stack');

describe('', () => {
    test('default constructor', () => {
        const testStack = createStack();

        expect(testStack.quantity).toBe(0);
        expect(testStack.storage).toEqual({});
        expect(testStack.maxSize).toBe(5);
    });

    test('constructor with an argument', () => {
        const testStack = createStack(10);

        expect(testStack.quantity).toBe(0);
        expect(testStack.storage).toEqual({});
        expect(testStack.maxSize).toBe(10);
    });

    test('push method', () => {
        const testStack = createStack();

        testStack.push('apple');
        testStack.push('orange');

        expect(testStack.storage).toEqual({ 1: 'apple', 2: 'orange' });
    });
});
