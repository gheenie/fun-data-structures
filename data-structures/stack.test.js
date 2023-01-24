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

    test('push(); nothing happens past max items', () => {
        const testStack = createStack();

        testStack.push('apple');
        testStack.push('orange');

        expect(testStack.storage).toEqual({ 1: 'apple', 2: 'orange' });

        testStack.push('c');
        testStack.push('d');
        testStack.push('e');
        testStack.push('past');

        expect(testStack.storage).toEqual({ 1: 'apple', 2: 'orange', 3: 'c', 4: 'd', 5: 'e' });
    });

    test('pop(); correct index when pop then push; nothing happens at 0 items', () => {
        const testStack = createStack();

        testStack.push('apple');
        testStack.push('orange');
        testStack.pop();

        expect(testStack.storage).toEqual({ 1: 'apple' });

        testStack.push('c');

        expect(testStack.storage).toEqual({ 1: 'apple', 2: 'c' });

        testStack.pop();
        testStack.pop();
        testStack.pop();

        expect(testStack.storage).toEqual({});
    });

    test('isEmpty() - empty; one item', () => {
        const testStack = createStack();

        expect( testStack.isEmpty() ).toBe(true);

        testStack.push('c');

        expect( testStack.isEmpty() ).toBe(false);
    });

    test('isFull() - empty; short of 1; full', () => {
        const testStack = createStack();

        expect( testStack.isFull() ).toBe(false);

        testStack.push('c');
        testStack.push('c');
        testStack.push('c');
        testStack.push('c');

        expect( testStack.isFull() ).toBe(false);

        testStack.push('c');
        
        expect( testStack.isFull() ).toBe(true);
    });

    test('peek() - empty; 1 item; multiple items', () => {
        const testStack = createStack();

        expect( testStack.peek() ).toBe(undefined);

        testStack.push('a');

        expect( testStack.peek() ).toBe('a');

        testStack.push('b');
        testStack.push('c');
        testStack.push('d');
        testStack.push('e');
        
        expect( testStack.peek() ).toBe('e');
    });
});
