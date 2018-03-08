var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree = _.extend(newTree, treeMethods);
  newTree.children = []; 
  
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childTree = Tree(value);
  this.children.push(childTree);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  for (var i = 0 ; i < this.children.length; i++){
    if (this.children[i].contains(target)) {
      return true;    
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
