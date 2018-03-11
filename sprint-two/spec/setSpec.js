describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });
  it('should not add duplicate keys to a set', function(){
    set.add('Jane');
    set.add('Jane');
    expect(Object.keys(set._storage).length).to.equal(1);
  });
  it('should handle adding numbers', function(){
    set.add(8);
    set.add(8);
    set.add(6);
    expect(Object.keys(set._storage).length).to.equal(2);
    expect(set.contains(6)).to.equal(true);
    expect(set.contains(5)).to.equal(false);
  });
  it('should handle sets with objects', function(){
    var obj1 = {a:1, b:2, c:3};
    var obj2 = [1,2,3,4];
    var obj3 = [6,7,8,9]; 
    set.add(obj1);
    set.add(obj2);
    expect(set.contains(obj1)).to.equal(true);
    expect(set.contains(obj2)).to.equal(true);
    expect(set.contains(obj3)).to.equal(false);
  });
});
