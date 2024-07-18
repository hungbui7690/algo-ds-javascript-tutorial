'use strict'
/*
  > https://visualgo.net/en/list

  - ko có indexes 
  - random access is not allowed >> phải traverse

//////////////////////////////////////////////////////

  SHIFT (remove from beginning)
  - PIC


  */

//////////////////////////////////////////////////////

class Node {
  constructor(val) {
    this.data = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }
  push(val) {
    const newNode = new Node(val)

    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++

    return this
  }
  traverse() {
    let current = this.head

    while (current) {
      console.log(current.data)
      current = current.next
    }
  }
  pop() {
    if (!this.head) return undefined

    if (this.head === this.tail) {
      this.head = null
      this.tail = null
      this.length = 0

      return this
    }

    let pre = this.head
    let temp = this.head.next

    while (temp.next) {
      pre = pre.next
      temp = temp.next
    }

    this.tail = pre
    this.tail.next = null
    this.length--

    return this
  }

  // (1)
  shift() {
    // (a) chỉ có 1 node
    if (this.length === 1) {
      this.head = null
      this.tail = null
      this.length = 0

      return this
    }

    // (b) ko có node nào
    if (this.length === 0) return undefined

    // (c)
    let temp = this.head
    this.head = this.head.next
    temp.next = null
    this.length--

    return this
  }
}

const list = new SinglyLinkedList()
list.push(10)
list.push(20)
list.push(30)

// (2)
list.shift()

console.log(list)
