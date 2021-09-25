

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var getStuff = this._storage.get(index);
  if (getStuff === undefined) {
    var item = [];
    item.push(k, v);
    this._storage.set(index, item);
  } else {
    var checkStuff = getStuff.indexOf(k);
    if (checkStuff !== -1) {
      var replaceStuff = getStuff.splice((checkStuff + 1), 1, v);
      this._storage.set(index, getStuff);
    } else {
      getStuff.push(k, v);
      this._storage.set(index, getStuff);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var valArray = this._storage.get(index);
  var indexOfValue = valArray.indexOf(k) + 1;
  return valArray[indexOfValue];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var valArray = this._storage.get(index);
  var indexOfKey = valArray.indexOf(k);
  valArray.splice(indexOfKey, 2);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


