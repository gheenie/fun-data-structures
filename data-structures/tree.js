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
    },
    removeData: function(node, parentsStr) {
        const childrenOfLastParent = this.getChildrenOfLastParent(this.storage, parentsStr);

        delete childrenOfLastParent[node];
    }
};

function createTree(node) {
    // Siblings must be unique. Enforced inside addData.
    // Only 1 root node. Enforced by formatting of parentsStr and logic of addData.
    /* Passing in node arguments also requires passing in full parent path.
    If no parent path = add/remove to all nodes; any 1 node apply boolean funcs */

    const tree = Object.create(treeProto);

    tree.storage = { [node]: {} };

    return tree;
}

module.exports = createTree;
