

// Instantiate a new graph
var Graph = function () {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  this[node] = {};
  this[node].link = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  var hasNode = false;
  if (this.hasOwnProperty(node)) {
    return hasNode = true;
  }
  return hasNode;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  if (this.contains(node)) {
    if (this[node].link.length !== 0) {
      for (var i = 0; i < this[node].link.length; i++) {
        this.removeEdge(node, this[node].link[i]);
      }
    }
    delete this[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  var hasLink = false;
  if (this[fromNode].link.length !== 0) {
    for (var i = 0; i < this[fromNode].link.length; i++) {
      if (this[fromNode].link[i] === toNode) {
        return hasLink = true;
      }
    }
  }
  return hasLink;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  this[fromNode].link.push(toNode);
  this[toNode].link.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  var fromIndex = this[fromNode].link.indexOf(toNode);
  var toIndex = this[toNode].link.indexOf(fromNode);
  this[fromNode].link.splice(fromIndex, 1);
  this[toNode].link.splice(toIndex, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  // get an array of keys
  var keys = Object.keys(this);
  // iterate within the array of keys
  for (var i = 0; i < keys.length; i++) {
    cb(keys[i]);
  }
  // call cb using each key
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


