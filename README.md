# linked-lists

Part of **[TheOdinProject Curriculum](https://www.theodinproject.com/lessons/javascript-linked-lists)**

1. **LinkedList** class / factory, which will represent the full list.

2. **Node** class / factory, containing a **value** function and a link to the **nextNode**, set both as **null** by default.

Build the following functions in your linked list class:

1. _append(value)_ adds a new node containing _value_ to the end of the list
2. _prepend(value)_ adds a new node containing _value_ to the start of the list
3. _size_ returns the total number of nodes in the list
4. _head_ returns the first node in the list
5. _tail_ returns the last node in the list
6. _at(index)_ returns the node at the given _index_
7. _pop_ removes the last element from the list
8. _contains(value)_ returns true if the passed in value is in the list and otherwise returns false.
9. _find(value)_ returns the index of the node containing value, or null if not found.
10. _toString_ represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: _( value ) -> ( value ) -> ( value ) -> null_

## Extra Credit

1. _insertAt(value, index)_ that inserts a new node with the provided _value_ at the given _index_.
2. _removeAt(index)_ that removes the node at the given _index_.
