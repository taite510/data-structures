class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  size() {
    return Object.keys(this.storage).length;
  }

  push(value) {
    var currentNum = Object.keys(this.storage).length;
    this.storage[currentNum] = value;
  }

  pop() {
    var result;
    if (Object.keys(this.storage).length !== 0) {
      var topOfStack = Object.keys(this.storage)[Object.keys(this.storage).length - 1];
      result = this.storage[topOfStack];
      delete this.storage[topOfStack];
    }
    return result;
  }
}