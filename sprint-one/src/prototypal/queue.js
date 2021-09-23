var Queue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  return newQueue;
};

var queueMethods = {};

queueMethods.size = function () {
  return Object.keys(this.storage).length;
};

queueMethods.enqueue = function (value) {
  var currentNum = Object.keys(this.storage).length;
  if (currentNum === 0) {
    this.storage[currentNum] = value;
  } else {
    currentNum = Number(Object.keys(this.storage)[currentNum - 1]) + 1;
    this.storage[currentNum] = value;
  }
};

queueMethods.dequeue = function () {
  var result;
  if (Object.keys(this.storage).length !== 0) {
    var topOfStack = Object.keys(this.storage)[0];
    result = this.storage[topOfStack];
    delete this.storage[topOfStack];
  }
  return result;
};

