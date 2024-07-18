'use strict'
/*
  > https://visualgo.net/en/list

  - ko có indexes 
  - random access is not allowed >> phải traverse
c
//////////////////////////////////////////////////////

  Constructor

  */

//////////////////////////////////////////////////////

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

// (1)
class SinglyLinkedList {
  // (a)
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }
}

// (2)
const list = new SinglyLinkedList()
console.log(list)
