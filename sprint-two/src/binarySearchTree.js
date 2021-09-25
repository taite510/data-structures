var BinarySearchTree = function (value) {
  var tree = {};
  tree.left = null;
  tree.right = null;
  tree.value = value;
  _.extend(tree, binaryTreeMethods);
  return tree;
};

var binaryTreeMethods = {};
binaryTreeMethods.insert = function (value) {
  var newTree = BinarySearchTree(value);

  if (this.value > value) {
    if (this.left === null) {
      this.left = newTree;
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = newTree;
    } else {
      this.right.insert(value);
    }
  }
};

binaryTreeMethods.contains = function (value) {
  var hasValue = false;
  if (this.value === value) {
    return hasValue = true;
  } else {
    if (this.value > value && this.left !== null) {
      return this.left.contains(value);
    } else if (this.value < value && this.right !== null) {
      return this.right.contains(value);
    } else {
      return hasValue;
    }
  }
};

binaryTreeMethods.depthFirstLog = function (cb) {
  cb(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
