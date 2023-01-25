const stackProto = {
    push: function(item) {
        if (this.quantity === this.maxSize) throw new Error('stack is full');

        this.storage[++this.quantity] = item;
    },
    pop:function() {
        if (this.quantity === 0) throw new Error('stack is empty');

        const poppedItem = this.storage[this.quantity];

        delete this.storage[this.quantity--];

        return poppedItem;
    },
    isEmpty: function() {
        if (this.quantity !== 0) return false;

        for (const i in this.storage) return false;

        return true;
    },
    isFull: function() {
        if (this.quantity === this.maxSize) return true;

        return false;
    },
    peek: function() {
        return this.storage[this.quantity];
    }
};

function createStack(maxSize = 5) {
    // build your stack object inside this factory function

    const stack = Object.create(stackProto);
    
    stack.quantity = 0;
    stack.storage = {};
    stack.maxSize = maxSize;

    return stack;
}

module.exports = createStack;
