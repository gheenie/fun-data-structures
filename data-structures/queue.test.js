const createQueue = require('./queue');

describe('', () => {
    test('default constructor', () => {
        const testQueue = createQueue(5);

        expect(testQueue.maxSize).toBe(5);
        expect(testQueue.storage).toEqual({});
        expect(testQueue.front).toBe(1);
        expect(testQueue.back).toBe(0);
    });

    test('enQueue(); throw error past max items', () => {
        const testQueue = createQueue(5);

        testQueue.enQueue(5);
        testQueue.enQueue(4);
        testQueue.enQueue(3);

        expect(testQueue.front).toBe(1);
        expect(testQueue.back).toBe(3);
        expect(testQueue.storage).toEqual({ 1: 5, 2: 4, 3: 3 });

        testQueue.enQueue('c');
        testQueue.enQueue('d');

        expect(testQueue.front).toBe(1);
        expect(testQueue.back).toBe(5);
        expect(testQueue.storage).toEqual({ 1: 5, 2: 4, 3: 3, 4: 'c', 5: 'd' });

        expect( () => testQueue.enQueue('past') ).toThrow('queue is full');
    });

    test('deQueue(); correct index when deQueue then enQueue; throw error at 0 items; correct index when enQueue after all deQueue', () => {
        const testQueue = createQueue();

        testQueue.enQueue(5);
        testQueue.enQueue(4);
        testQueue.enQueue(3);
        const output = testQueue.deQueue();

        expect(output).toBe(5);
        expect(testQueue.front).toBe(2);
        expect(testQueue.back).toBe(3);
        expect(testQueue.storage).toEqual({ 2: 4, 3: 3 });

        testQueue.enQueue('c');

        expect(testQueue.front).toBe(2);
        expect(testQueue.back).toBe(4);
        expect(testQueue.storage).toEqual({ 2: 4, 3: 3, 4: 'c' });

        testQueue.deQueue();
        testQueue.deQueue();
        testQueue.deQueue();
        
        expect(testQueue.front).toBe(5);
        expect(testQueue.back).toBe(4);
        expect( () => testQueue.deQueue() ).toThrow('queue is empty');

        testQueue.enQueue('surprise');

        expect(testQueue.front).toBe(5);
        expect(testQueue.back).toBe(5);
        expect(testQueue.storage).toEqual({ 5: 'surprise' });
    });

    test('getQuantity() - 0; betw 0 and max; max; after deQueueing', () => {
        const testQueue = createQueue(5);

        expect( testQueue.getQuantity() ).toBe(0);

        testQueue.enQueue(5);
        testQueue.enQueue(4);
        testQueue.enQueue(3);

        expect( testQueue.getQuantity() ).toBe(3);

        testQueue.enQueue('c');
        testQueue.enQueue('d');

        expect( testQueue.getQuantity() ).toBe(5);

        testQueue.deQueue();
        testQueue.deQueue();
        testQueue.deQueue();
        testQueue.deQueue();
        testQueue.deQueue();

        expect( testQueue.getQuantity() ).toBe(0);
    });

    test('isEmpty() - empty; one item', () => {
        const testQueue = createQueue(5);

        expect( testQueue.isEmpty() ).toBe(true);

        testQueue.enQueue('c');

        expect( testQueue.isEmpty() ).toBe(false);
    });

    test('isFull() - empty; short of 1; full', () => {
        const testQueue = createQueue(5);

        expect( testQueue.isFull() ).toBe(false);

        testQueue.enQueue('c');
        testQueue.enQueue('c');
        testQueue.enQueue('c');
        testQueue.enQueue('c');

        expect( testQueue.isFull() ).toBe(false);

        testQueue.enQueue('c');
        
        expect( testQueue.isFull() ).toBe(true);
    });

    test('peek() - empty; 1 item; multiple items', () => {
        const testQueue = createQueue();

        expect( testQueue.peek() ).toBe(undefined);

        testQueue.enQueue('a');

        expect( testQueue.peek() ).toBe('a');

        testQueue.enQueue('b');
        testQueue.enQueue('c');
        testQueue.enQueue('d');
        testQueue.enQueue('e');
        
        expect( testQueue.peek() ).toBe('a');
    });
});
