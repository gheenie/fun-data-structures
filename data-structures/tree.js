const treeProto = {
    /*addData: function(nodeToAdd, parentsStr) {
        // parentsStr is a string with whitespaces between parent nodes.
        const parentNodes = parentsStr.split(' ');

        function addToLastParentNode(childNode, currentObj, i) {
            if (i === parentNodes.length - 1) {
                if ( currentObj[parentNodes[i]].hasOwnProperty(childNode) ) throw new Error('node already exists');

                currentObj[parentNodes[i]][childNode] = {};
            } else {
                addToLastParentNode(childNode, currentObj[parentNodes[i]], ++i);
            }
        }

        addToLastParentNode(nodeToAdd, this.storage, 0);
    }*/

    addData: function(node, parentsStr) {
        // parentsStr is a string with whitespaces between parent nodes.
        
        function getChildrenOfLastParent(currentObj, parentsSubstr) {
            const  whitespaceIndex = parentsSubstr.indexOf(' ');

            if (whitespaceIndex === -1) {
                return currentObj[parentsSubstr];
            } else {
                currentObj = currentObj[ parentsSubstr.substring(0, whitespaceIndex) ];
                parentsSubstr = parentsSubstr.substring(whitespaceIndex + 1);
                return getChildrenOfLastParent(currentObj, parentsSubstr);
            }
        }

        const childrenOfLastParent = getChildrenOfLastParent(this.storage, parentsStr);

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
