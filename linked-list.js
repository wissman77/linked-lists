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

  tail() {
    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    // the tail with nodeNext = null
    return current;
  }

  at(index) {
    // boundaries
    if (index < 0 || index > this.length - 1) {
      return null;
    }
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      if (index === i) return current;
      current = current.nextNode;
    }
    return null;
  }

  pop() {
    // keep track of previous node to update it's nextNode as null
    let current = this.head;
    let prev = null;
    while (current.nextNode) {
      prev = current;
      current = current.nextNode;
    }
    prev.nextNode = null;
    this.length--;
    return current;
  }

  contains(value) {
    let current = this.head;
    for (let index = 0; index < this.length; index++) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    for (let index = 0; index < this.length; index++) {
      if (current.value === value) return index;
      current = current.nextNode;
    }
    return null;
  }

  toString() {
    let output = '';
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      output += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    return `${output} null`;
  }

  insertAt(value, index) {
    // boundaries  checking
    if (index < 0) throw new Error('Out of range');
    if (!this.head) this.prepend(value);
    else if (index === 0) this.prepend(value);
    else if (index > this.length - 1) this.append(value);
    else {
      // insert it at the requested index or at the end if index to big
      let current = this.head;
      let prev = null;
      for (let i = 0; i < index; i++) {
        prev = current;
        current = current.nextNode;
        // if (!current) break;
      }
      const node = new Node(value, current);
      prev.nextNode = node;
      this.length++;
    }
  }
}

module.exports = LinkedList;
