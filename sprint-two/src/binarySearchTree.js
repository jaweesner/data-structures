var BinarySearchTree = function(value) {
  var newBST = Object.create(BinarySearchTree.prototype);
  newBST.value = value;
  newBST.right = null;
  newBST.left = null;
  
  return newBST;
  
};

BinarySearchTree.prototype.insert= function(value) {
  var direction = this.value > value ? "left" : "right"

  if (!this[direction]) {
    this[direction] = BinarySearchTree(value);
    return ;
  }
  
  this[direction].insert(value)
};

BinarySearchTree.prototype.contains = function(value) {
  if(this.value === value) return true;
  
  var direction = this.value > value ? "left" : "right"

  if (!this[direction]) {
    return false;
  }
  return this[direction].contains(value);
  
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {

  cb(this.value)
  if (this.left){
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
    insert: O(n), linear
    contains: O(n), linear
    DFL: O(n), linear 
 */
