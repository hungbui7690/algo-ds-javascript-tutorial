'use strict'
/*
  Constructor
  - create LL class
  - SinglyLinkedList class

      |length: 0 |
      |head: null|
      |tail: null|

*/

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }
}

const list = new SinglyLinkedList()
console.log(list)
