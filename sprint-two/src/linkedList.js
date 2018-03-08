var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  var Node = function(value) {
    var node = {};
    node.value = value;
    node.next = null;
    return node;
  };

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (!list.head){
      list.head = newNode;
      list.tail = newNode;
    }else{
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    if (!list.head){
      return;
    }
    var val = list.head.value;
    if (!list.head.next){
      list.head = null;
      list.tail = null;
    }else{
      
      list.head = list.head.next;
    }
    return val;
  };

  list.contains = function(target) {
    var tempNode = list.head;
    while (true){
      if (!tempNode){
        return false;
      }
      if(tempNode.value === target){
        return true;
      }
      tempNode = tempNode.next;
    }

  };

  return list;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
