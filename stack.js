//last in, first out.
//this can also just be a simple array, with push and pop.


//time complexity is the same as linked lists. slightly more efficient than arrays for insertion and deletion, slightly less efficient for access.

//Average case:

//Access  Search  Insertion Deletion
//Θ(n)    Θ(n)    Θ(1)      Θ(1)

function Stack(){
  this._size = 0;
  this._storage = {};

  this.push = function(data){
    this._size++;
    this._storage[this._size] = data;
  };

  this.pop = function(){
    var size = this._size.toString(),
        deletedData;

    if(size){
      deletedData = this._storage[size];

      delete this._storage[size];
      this._size--;

      return deletedData;
    }
  };
}

var cafes = new Stack();
cafes.push('Cafe Loft');
cafes.push('Yellow House Cafe');
cafes.push('Go Get Em Tiger');
cafes.push('Bricks And Scones');
console.log(cafes);
cafes.pop();
console.log(cafes);