/*
  Create Node

*/

class Node {
  constructor(val) {
    this.data = val
    this.next = null
    this.prev = null // add prev
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }
}

const first = new Node('hi')
first.next = new Node('there')
first.next.next = new Node('how')
first.next.next.next = new Node('are')
first.next.next.next.next = new Node('you')

console.log(first)
console.log(first.next)
console.log(first.next.next)
