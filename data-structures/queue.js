const queueProto = {
    enQueue: function(item) {
        if (this.back - this.front === this.maxSize - 1) throw new Error('queue is full');

        this.storage[++this.back] = item;
    },
    deQueue: function() {
        if (this.back - this.front === -1) throw new Error('queue is empty');

        const deQueuedItem = this.storage[this.front];
    
        delete this.storage[this.front++];
    
        return deQueuedItem;
    },
    getQuantity: function() {
        return this.back - this.front + 1;
    },
    isEmpty: function() {
        if (this.getQuantity() !== 0) return false;

        for (const i in this.storage) return false;
    
        return true;
    },
    isFull: function() {
        if (this.getQuantity() === this.maxSize) return true;

        return false;
    },
    peek: function() {
        return this.storage[this.front];
    }
};

function createQueue(maxSize) {
    const queue = Object.create(queueProto);

    queue.maxSize = maxSize;
    queue.front = 1;
    queue.back = 0;
    queue.storage = {};
    
    return queue;
}

module.exports = createQueue;
