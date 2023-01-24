function createStack(maxSize = 5) {
    // build your stack object inside this factory function

    const stack = {};
    
    stack.quantity = 0;
    stack.storage = {};
    stack.maxSize = maxSize;
    stack.push = push;
    stack.pop = pop;
    stack.isEmpty = isEmpty;
    stack.isFull = isFull;
    stack.peek = peek;

    return stack;
}

function push(item) {
    if (this.quantity === this.maxSize) throw new Error('stack is full');

    this.storage[++this.quantity] = item;
}

function pop() {
    if (this.quantity === 0) throw new Error('stack is empty');

    const poppedItem = this.storage[this.quantity];

    delete this.storage[this.quantity--];

    return poppedItem;
}

function isEmpty() {
    if (this.quantity !== 0) return false;

    for (const i in this.storage) return false;

    return true;
}

function isFull() {
    if (this.quantity === this.maxSize) return true;

    return false;
}

function peek() {
    return this.storage[this.quantity];
}

module.exports = createStack;
