var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newBranch = Tree(value);
  this.children.push(newBranch);
};

treeMethods.contains = function(target) {
  var hasTarget = false;
  var findTarget = function(target, node) {
    if (target !== node.value) {
      if (node.children.length !== 0) {
        for (var i = 0; i < node.children.length; i++) {
          findTarget(target, node.children[i]);
        }
      }
    } else {
      return hasTarget = true;
    }
  };
  findTarget(target, this);
  return hasTarget;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */



