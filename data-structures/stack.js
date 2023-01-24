function createStack(maxSize = 5) {
  // build your stack object inside this factory function

  const stack = {};
  stack.quantity = 0;
  stack.storage = {};
  stack.maxSize = maxSize;
  stack.push = push;
  stack.index = 0;

  return stack;
}

function push(item) {
  this.storage[++this.index] = item;
}

module.exports = createStack;
