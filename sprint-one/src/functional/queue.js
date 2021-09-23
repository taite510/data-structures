var Queue = function() {
  var someInstance = {};
  var storage = {};

  someInstance.enqueue = function(value) {
    var currentNum = Object.keys(storage).length;
    if (currentNum === 0) {
      storage[currentNum] = value;
    } else {
      currentNum = Number(Object.keys(storage)[currentNum - 1]) + 1;
      storage[currentNum] = value;
    }
  };

  someInstance.dequeue = function() {
    var result;
    if (Object.keys(storage).length !== 0) {
      var topOfStack = Object.keys(storage)[0];
      result = storage[topOfStack];
      delete storage[topOfStack];
    }
    return result;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
