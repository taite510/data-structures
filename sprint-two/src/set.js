var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this.storage.push(item);
};

setPrototype.contains = function(item) {
  var hasItem = false;

  for (var i = 0; i < this.storage.length; i++) {
    if (item === this.storage[i]) {
      return hasItem = true;
    }
  }
  return hasItem;
};

setPrototype.remove = function(item) {
  var index = this.storage.indexOf(item);
  this.storage.splice(index, 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
