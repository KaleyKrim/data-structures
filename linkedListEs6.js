//Example: your browser history, allowing you to go back.
//Or like, a playlist of music. You can go back and forth.

// Linked list time complexity.
// Same as stacks and queues.
// Linked list time complexity
// (Algorithm : Average : Worst-Case)
// Search : O(n) : O(n)
// Insert : O(1) : O(1)
// Delete : O(1) : O(1)

class Node {
  constructor (data) {
    this.data = data;
    this.next = null
  }
}

class LinkedList{
  constructor () {
    this.head = null;
    this.length = 0;
  }

  add (data) {
    const nodeToAdd = new Node(data);
    let nodeToCheck = this.head;
    if ( !nodeToCheck ) {
      //if there is no head, the new node will become the head.
      this.head = nodeToAdd;
      this.length++;
      return nodeToAdd;
    }
    //if there already is a head, iterate to the next node and check it, until you find a node w/o a next.
    while ( nodeToCheck.next ) {
      nodeToCheck = nodeToCheck.next;
    }
    //then you make the new node the tail node's next -- the new node becomes the tail.
    nodeToCheck.next = nodeToAdd;
    this.length++;
    return nodeToAdd;
  }

  get (num) {
    let nodeToCheck = this.head;
    let count = 0;

    if ( num > this.length ) return "Doesn't Exist!"

    //iterate through the nodes until count === num, and return that one
    while ( count < num ) {
      nodeToCheck = nodeToCheck.next;
      count++;
    }
    return nodeToCheck;
  }

  remove (num) {
    let nodeToCheck = this.head,
      count = 0,
      prevNode = null

    if( num > this.length ) return "Doesn't Exist!";

    if( num === 0 ) {
      //if you want to remove the first node, aka the head
      this.head = nodeToCheck.next;
      this.length--;
      return this.head;
    }

    while( count < num ) {
      //iterate through the nodes until you get to the node at num
      prevNode = nodeToCheck;
      nodeToCheck = nodeToCheck.next;
      count++;
    }

    //hook up the node before nodeToCheck to the node after nodeToCheck, effectively removing nodeToCheck
    prevNode.next = nodeToCheck.next;
    nodeToCheck = null;
    this.length--;

    return this.head;
  }

}

const cafes = new LinkedList();
cafes.add('Cafe Loft');
cafes.add('Yellow House Cafe');
cafes.add('Go Get Em Tiger');
cafes.add('Bricks And Scones');
console.log(cafes);
console.log(cafes.get(2))