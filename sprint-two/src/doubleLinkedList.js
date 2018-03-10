var DoubleLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (!list.head){
      list.head = newNode;
      list.tail = newNode;
    }else{
      list.tail.next = newNode;
      newNode.prev = list.tail;
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

  list.addToHead = function(value){
    var newNode = Node(value);
    if (!list.head){
      list.head = newNode;
      list.tail = newNode;
    }else{
      list.head.prev = newNode;
      newNode.next = list.head;
      list.head = newNode;
    }
    
  }

  list.removeTail = function(){
    if (!list.tail){
      return;
    }
    var val = list.tail.value;
    if (!list.tail.prev){
      list.head = null;
      list.tail = null;
    }else{    
      list.tail = list.tail.prev;
      list.tail.next = null;
    }
    return val;   
  }


  return list;
};

var Node = function(value) {
    var node = {};
    node.value = value;
    node.next = null;
    node.prev = null;
    return node;
  };


/*
 * Complexity: What is the time complexity of the above functions?
    add: O(1)
    remove: O(1)
    contains: O(n)
 */
