var Stack = function() {
  this.storage = {};
};

Stack.prototype.size = function () {
  return Object.keys(this.storage).length;
};

Stack.prototype.push = function (value) {
  var currentNum = Object.keys(this.storage).length;
  this.storage[currentNum] = value;
};

Stack.prototype.pop = function () {
  var result;
  if (Object.keys(this.storage).length !== 0) {
    var topOfStack = Object.keys(this.storage)[Object.keys(this.storage).length - 1];
    result = this.storage[topOfStack];
    delete this.storage[topOfStack];
  }
  return result;
};

