//Associative array. A hash table distributes key/value pairs across an array of buckets. The hash function computes the index in which to insert the data. You try to avoid key collision, but that's really hard.

//Time complexity: Average O(1) for search, insertion, deletion. So, a little better than linked lists, queues, arrays, & stacks for searching (about the same for others)


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
      //If the key already exists in the table, replace the value with our new value.
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
          inserted = true;
        }
      }
      //If you never found a place to insert it, then just push the key value pair into the array.
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