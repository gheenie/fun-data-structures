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
