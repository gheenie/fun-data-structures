function createQueue(maxSize) {
    const queue = {};

    queue.maxSize = maxSize;
    queue.front = 1;
    queue.back = 0;
    queue.storage = {};
    queue.enQueue = enQueue;
    queue.deQueue = deQueue;
    queue.getQuantity = getQuantity;
    queue.isEmpty = isEmpty;
    queue.isFull = isFull;
    queue.peek = peek;
    
    return queue;
}

function enQueue(item) {
    if (this.back - this.front === this.maxSize - 1) throw new Error('queue is full');

    this.storage[++this.back] = item;
}

function deQueue() {
    if (this.back - this.front === -1) throw new Error('queue is empty');

    const deQueuedItem = this.storage[this.front];

    delete this.storage[this.front++];

    return deQueuedItem;
}

function getQuantity() {
    return this.back - this.front + 1;
}

function isEmpty() {
    if (this.getQuantity() !== 0) return false;

    for (const i in this.storage) return false;

    return true;
}

function isFull() {
    if (this.getQuantity() === this.maxSize) return true;

    return false;
}

function peek() {
    return this.storage[this.front];
}

module.exports = createQueue;
