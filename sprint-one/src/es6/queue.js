class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  size() {
    return Object.keys(this.storage).length;
  }

  enqueue(value) {
    var currentNum = Object.keys(this.storage).length;
    if (currentNum === 0) {
      this.storage[currentNum] = value;
    } else {
      currentNum = Number(Object.keys(this.storage)[currentNum - 1]) + 1;
      this.storage[currentNum] = value;
    }
  }

  dequeue() {
    var result;
    if (Object.keys(this.storage).length !== 0) {
      var topOfStack = Object.keys(this.storage)[0];
      result = this.storage[topOfStack];
      delete this.storage[topOfStack];
    }
    return result;
  }
}
