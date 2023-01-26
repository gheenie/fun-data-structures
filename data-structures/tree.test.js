const createTree = require('./tree');

describe('constructor', () => {
    test('one argument', () => {
        const testTree = createTree(5);

        expect(testTree.storage).toEqual({ 5: {} });
    });
});

describe('addData', () => {
    const testTree = createTree(5);

    test('one parent', () => {
        testTree.addData(15, '5');

        expect(testTree.storage).toEqual({ 5: { 15: {} } });
    });


    test('two parents', () => {
        testTree.addData(20, '5 15');

        expect(testTree.storage).toEqual({ 5: { 15: { 20: {} } } });
    });

    test('two children', () => {
        testTree.addData(33, '5');

        expect(testTree.storage).toEqual({ 5: { 15: { 20: {} }, 33: {} } });
    });

    test('node already exists', () => {
        expect( () => testTree.addData(20, '5 15') ).toThrow('node already exists');
    });

    test('any parent not existing', () => {
        expect( () => testTree.addData(2, '5 20') ).toThrow('at least one parent does not exist');
    });
});

describe('removeData', () => {
    const testTree = createTree(5);
    testTree.addData(15, '5');
    testTree.addData(20, '5 15');
    testTree.addData(33, '5');

    test('remove node with no siblings and deepest level', () => {
        testTree.removeData(20, '5 15');

        expect(testTree.storage).toEqual({ 5: { 15: {}, 33: {} } });
    });

    test('remove node with siblings', () => {
        testTree.removeData(33, '5');

        expect(testTree.storage).toEqual({ 5: { 15: {} } });
    });
});

describe('isRoot', () => {
    const testTree = createTree(5);
    testTree.addData(15, '5');
    testTree.addData(20, '5 15');
    testTree.addData(33, '5');

    test('is root', () => {
        expect( testTree.isRoot(5) ).toBe(true);
    });

    test('is not root', () => {
        expect( testTree.isRoot(15) ).toBe(false);
    });
});

describe('hasSiblings', () => {
    const testTree = createTree(5);
    testTree.addData(15, '5');
    testTree.addData(20, '5 15');
    testTree.addData(33, '5');

    test('siblings present; sibling 1', () => {
        expect( testTree.hasSiblings(15, '5') ).toBe(true);
    });

    test('siblings present; sibling 2', () => {
        expect( testTree.hasSiblings(33, '5') ).toBe(true);
    });

    test('no siblings', () => {
        expect( testTree.hasSiblings(20, '5 15') ).toBe(false);
    });
});

describe('isLeaf', () => {
    const testTree = createTree(5);
    testTree.addData(15, '5');
    testTree.addData(20, '5 15');
    testTree.addData(33, '5');

    test('not leaf; sibling 1', () => {
        expect( testTree.isLeaf(15, '5') ).toBe(false);
    });

    test('is leaf; sibling 2', () => {
        expect( testTree.isLeaf(33, '5') ).toBe(true);
    });

    test('is leaf; no siblings and deeper level', () => {
        expect( testTree.isLeaf(20, '5 15') ).toBe(true);
    });
});

describe('breadthFirstSearch', () => {
    const testTree = createTree(5);
    testTree.addData(15, '5');
    testTree.addData(20, '5 15');
    testTree.addData(33, '5');
    testTree.addData(100, '5 15 20');
    testTree.addData(100, '5 33');

    test('match found', () => {
        expect( testTree.breadthFirstSearch(100) ).toBe('5 33');
    });

    test('no match found', () => {
        expect( testTree.breadthFirstSearch(99) ).toBe('no match found');
    });

    test('match found', () => {
        expect( testTree.breadthFirstSearch(100) ).toBe('5 33');
    });

    test('match found is root', () => {
        expect( testTree.breadthFirstSearch(5) ).toBe('');
    });
});
