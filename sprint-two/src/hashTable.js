

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._load = 0; 
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined){
    this._storage.set(index,[]);
  }
  var hashArray = this._storage.get(index);
  for (var i = 0; i < hashArray.length; i++) {
    if (hashArray[i].get(0) === k){
      hashArray[i].set(1,v);
      return;
    }
  }
  var tuple = LimitedArray(2);
  tuple.set(0,k);
  tuple.set(1,v);
  this._storage.get(index).push(tuple);
  this._load ++;
  this.resize();
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var hashArray = this._storage.get(index);
  for (var i = 0; i < hashArray.length; i++) {
    if (hashArray[i].get(0) === k){
      return hashArray[i].get(1);
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var hashArray = this._storage.get(index);
  if (hashArray){
    for (var i = 0; i < hashArray.length; i++) {
      if (hashArray[i].get(0) === k){
        hashArray.splice(i,1);
        this._load --;
        this.resize();
        return;
      }
    }
  }
  throw new Error(`Can't remove nonexistent values`);
  
  
};

HashTable.prototype.resize = function() {
  var loadRatio = this._load / this._limit ;
  if ((loadRatio < 0.75 && loadRatio > 0.25) || (loadRatio <= 0.25 && this._limit === 8)) return ;
  
  var newLimitArr;
  
  var newLimit;
  
  if (loadRatio >= 0.75){
    // create new doubled array
    newLimit = 2 * this._limit;
    newLimitArr = LimitedArray(newLimit);
  } else {
    newLimit = this._limit / 2;
    newLimitArr = LimitedArray(newLimit);
  }
  
  this._storage.each(innerArr => {
    if (!innerArr) return ;
    for (var i = 0; i < innerArr.length; i++){
      var index = getIndexBelowMaxForKey(innerArr[i].get(0), newLimit);

      if (newLimitArr.get(index) === undefined){
        newLimitArr.set(index,[]);
      }
        
      var tuple = LimitedArray(2);
      tuple.set(0,innerArr[i].get(0));
      tuple.set(1,innerArr[i].get(1));
      newLimitArr.get(index).push(tuple);

    }
  })
  this._storage = newLimitArr;
  this._limit = newLimit;
};


/*
 * Complexity: What is the time complexity of the above functions?

  *Right now, the functions are more tending towards linear,
  depending on the size of the data set (5 items: const, 1k: linear). Once 
  the resizing is implemented, the function will be more likely to be const. 
  This also depends on the reliability of the spread of the hash function as well

 */


