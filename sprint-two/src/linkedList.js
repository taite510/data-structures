var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var currentNode = Node(value);
    if (list.head === null) {
      list.head = currentNode;
    } else {
      list.tail.next = currentNode;
    }
    list.tail = currentNode;

  };

  list.removeHead = function() {
    var currentHead = list.head;
    var currentHeadValue = list.head.value;
    if (JSON.stringify(list.head) !== JSON.stringify(list.tail)) {
      list.head = currentHead.next;
    } else {
      currentHead = null;
      list.tail = null;
    }
    return currentHeadValue;
  };

  list.contains = function(target) {
    var hasTarget = false;
    var findTarget = function (target, currentNode) {
      if (currentNode.value !== target && currentNode.next !== null) {
        findTarget(target, currentNode.next);
      } else if (currentNode.value === target) {
        return hasTarget = true;
      }
    };
    findTarget(target, list.head);
    return hasTarget;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
