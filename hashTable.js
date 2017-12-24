function hash(string, max){
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % max;
};

class HashTable{
  constructor(){
    this.storage = [];
    this.storageLimit = 14;
  }

  print() {
    console.log(this.storage)
  }

  add(key, value) {
    let storage = this.storage;
    let storageLimit = this.storageLimit;
    var index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      storage[index] = [
        [key, value]
      ];
    } else {
      var inserted = false;
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        storage[index].push([key, value]);
      }
    }
  };

  remove(key) {
    let storage = this.storage;
    let storageLimit = this.storageLimit;
    var index = hash(key, storageLimit);
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  };

  lookup(key) {
    let storage = this.storage;
    let storageLimit = this.storageLimit;
    var index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  };

};

const animals = new HashTable();
animals.add('daisy', 'doodle');
animals.add('louis', 'doodle');
animals.add('plants', 'tortoise');
animals.add('ele', 'kitters');

console.log(animals.lookup('louis'));
animals.print();