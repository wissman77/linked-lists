#!/usr/bin/node

const LinkedList = require('./linked-list');

const linkedL = new LinkedList();
linkedL.append(10);
linkedL.append(20);
linkedL.append(30);
linkedL.prepend(5);
console.log(`Size of linked list ${linkedL.size()}`);
console.log(linkedL.contains(10)); // true
console.log(linkedL.contains(100)); // false
console.log(linkedL.pop()); // remove and show node with value 30 - last one
console.log(linkedL.tail()); // returns node with value 20
console.log(linkedL.at(1)); // second node with value 10;
linkedL.insertAt(2, 0); // insert at the head
console.log(linkedL.toString()); // ( 2 ) -> ( 5 ) -> ( 10 ) -> ( 20 ) ->  null
linkedL.append(100);
console.log(linkedL.toString()); // ( 2 ) -> ( 5 ) -> ( 10 ) -> ( 20 ) -> ( 100 ) ->  null
linkedL.removeAt(2); // remove node with value 10
console.log(linkedL.toString()); // ( 2 ) -> ( 5 ) -> ( 20 ) -> ( 100 ) ->  null
