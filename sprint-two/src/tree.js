var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree = _.extend(newTree, treeMethods);
  newTree.parent = null;
  newTree.children = []; 
  
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childTree = Tree(value);
  this.children.push(childTree);
  childTree.parent = this;
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

treeMethods.removeFromParent = function(){
  if (!this.parent){
    return ;
  }
  var index = this.parent.children.indexOf(this);
  this.parent.children.splice(index,1);
  this.parent = null;
}

treeMethods.traverse = function(cb){
  cb(this.value);
  for (var i = 0; i < this.children.length; i++) {
    this.children[i].traverse(cb);
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
  add: O(1) // constant
  contains : O(n); Linear
 */
