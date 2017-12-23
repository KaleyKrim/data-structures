//First in, first out.
//Like a stack, but it deletes only the oldest added data.
//You can also implement this with a simple array, using unshit and pop.
//Also known as a BUFFER.

//Example: The event loop in a web browser.

//Same time complexity as a stack.
//Average case:

//Access  Search  Insertion Deletion
//Θ(n)    Θ(n)    Θ(1)      Θ(1)

function Queue() {
  this._oldestIndex = 1;
  this._newestIndex = 1;
  this._storage = {};

  this.size = function() {
    return this._newestIndex - this._oldestIndex;
  };

  this.enqueue = function(data) {
    this._storage[this._newestIndex] = data;
    this._newestIndex++;
  };

  this.dequeue = function() {
    var oldestIndex = this._oldestIndex,
        newestIndex = this._newestIndex,
        deletedData;

    if (oldestIndex !== newestIndex) {
      deletedData = this._storage[oldestIndex];
      delete this._storage[oldestIndex];
      this._oldestIndex++;

      return deletedData;
    }
  };

}

var cafes = new Queue();
cafes.enqueue('Cafe Loft');
cafes.enqueue('Yellow House Cafe');
cafes.enqueue('Go Get Em Tiger');
cafes.enqueue('Bricks And Scones');
console.log(cafes);
cafes.dequeue();
console.log(cafes);