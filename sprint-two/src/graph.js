

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = new this.Node(node);
  this.nodes.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

  return !!this.selectNode(node);

};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var nodeToRemove = this.selectNode(node);
  while(nodeToRemove.edges.length > 0) {
    this.removeEdge(node, nodeToRemove.edges[0].value);
 }
  var index = this.nodes.indexOf(nodeToRemove);
  this.nodes.splice(index,1);
  
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var selectedNode = this.selectNode(fromNode);

  for (var i = 0; i < selectedNode.edges.length; i++) {
    if (selectedNode.edges[i].value === toNode) return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var selectedFrom = this.selectNode(fromNode);
  var selectedTo = this.selectNode(toNode);
  selectedFrom.edges.push(selectedTo);
  selectedTo.edges.push(selectedFrom);
  
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var selectedFrom = this.selectNode(fromNode);
  var selectedTo = this.selectNode(toNode);
  var indexFrom = selectedFrom.edges.indexOf(selectedTo);
  selectedFrom.edges.splice(indexFrom, 1);
  var indexTo = selectedTo.edges.indexOf(selectedFrom);
  selectedTo.edges.splice(indexTo, 1);
 
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var nodeValues = this.nodes.map(selNode => selNode.value);
  _.each(nodeValues, cb);
};

Graph.prototype.Node = function (value){
  this.value = value;
  this.edges = [];
};

Graph.prototype.selectNode = function(node){
  var selectedNode;
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      selectedNode = this.nodes[i];
      break;
    }
  }
  return selectedNode;
}

/*
 * Complexity: What is the time complexity of the above functions?
 */


