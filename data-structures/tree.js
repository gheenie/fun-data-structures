const treeProto = {
    getChildrenOfLastParent: function(currentObj, parentsSubstr) {
        const  whitespaceIndex = parentsSubstr.indexOf(' ');

        if (whitespaceIndex === -1) {
            return currentObj[parentsSubstr];
        } else {
            currentObj = currentObj[ parentsSubstr.substring(0, whitespaceIndex) ];
            parentsSubstr = parentsSubstr.substring(whitespaceIndex + 1);
            return this.getChildrenOfLastParent(currentObj, parentsSubstr);
        }
    },
    addData: function(node, parentsStr) {
        // parentsStr is a string with whitespaces between parent nodes.
        
        const childrenOfLastParent = this.getChildrenOfLastParent(this.storage, parentsStr);

        if ( childrenOfLastParent === undefined ) throw new Error('at least one parent does not exist');

        if ( childrenOfLastParent.hasOwnProperty(node) ) throw new Error('node already exists');

        childrenOfLastParent[node] = {};
    }
};

function createTree(node) {
    // Siblings must be unique.
    // Only 1 root node.

    const tree = Object.create(treeProto);

    tree.storage = { [node]: {} };

    return tree;
}

module.exports = createTree;
