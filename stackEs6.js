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