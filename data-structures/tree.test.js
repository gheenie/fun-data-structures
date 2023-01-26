const createTree = require('./tree');

describe('', () => {
    test('default constructor', () => {
        const testTree = createTree(5);

        expect(testTree.storage).toEqual({ 5: {} });
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
});
