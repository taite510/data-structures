var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  return newStack;
};

var stackMethods = {};


stackMethods.size = function () {
  return Object.keys(this.storage).length;
};

stackMethods.push = function (value) {
  var currentNum = Object.keys(this.storage).length;
  this.storage[currentNum] = value;
};

stackMethods.pop = function () {
  var result;
  if (Object.keys(this.storage).length !== 0) {
    var topOfStack = Object.keys(this.storage)[Object.keys(this.storage).length - 1];
    result = this.storage[topOfStack];
    delete this.storage[topOfStack];
  }
  return result;
};
