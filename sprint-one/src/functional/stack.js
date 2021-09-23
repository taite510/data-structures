var Stack = function() {
  var someInstance = {};
  var storage = {};

  someInstance.push = function(value) {
    var currentNum = Object.keys(storage).length;
    storage[currentNum] = value;
  };

  someInstance.pop = function() {
    var result;
    if (Object.keys(storage).length !== 0) {
      var topOfStack = Object.keys(storage)[Object.keys(storage).length - 1];
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
