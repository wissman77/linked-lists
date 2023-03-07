const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    const node = new Node(value);
    // if this is the first append
    if (this.length === 0) {
      this.head = node;
    } else {
      // add the node as last node nextnode
      let current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = node;
    }
    this.length++;
  }

  prepend(value) {
    const node = new Node(value, this.head);
    this.head = node;
    this.length++;
  }

  size() {
    return this.length;
  }

  head() {
    return this.head;
  }
}

module.exports = LinkedList;
