//Last in, first out. You can only remove the most recently added data.
//Example: "undo" in text editors.
//Also example: when you check in super early for a flight, and your bags come out LAST!!
//This can also just be a simple array, with push and pop.

//time complexity is the same as linked lists. slightly more efficient than arrays for insertion and deletion, slightly less efficient for access.

//Average case:

//Access  Search  Insertion Deletion
//Θ(n)    Θ(n)    Θ(1)      Θ(1)

class Stack {
  constructor(){
    this._size = 0;
    this._storage = {};
  }

  push(data){
    this._size++;
    this._storage[this._size] = data;
  };

  pop(){
    let size = this._size.toString(),
        deletedData;

    if(size){
      deletedData = this._storage[size];

      delete this._storage[size];
      this._size--;

      return deletedData;
    }
  };

}

const cafes = new Stack();
cafes.push('Cafe Loft');
cafes.push('Yellow House Cafe');
cafes.push('Go Get Em Tiger');
cafes.push('Bricks And Scones');
console.log(cafes);
cafes.pop();
console.log(cafes);