'use strict'
/*
  > https://visualgo.net/en/list

//////////////////////////////////////////////////////






*/

//////////////////////////////////////////////////////

class Node {
  constructor(val) {
    this.data = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }
  push(val) {
    const newNode = new Node(val)

    if (!this.head || !this.tail) {
      this.head = newNode
      this.tail = newNode
      newNode.prev = null
      newNode.next = null

      this.length++
      return this
    }

    newNode.prev = this.tail
    newNode.next = null
    this.tail.next = newNode
    this.tail = newNode

    this.length++
    return this
  }

  print() {
    let currentNode = this.head
    const arr = []

    while (currentNode) {
      arr.push(currentNode.data)
      currentNode = currentNode.next
    }

    console.log(arr)
  }

  // (1) check pic visualgo
  pop() {
    // (***)
    if (!this.head || !this.tail) return undefined
    if (this.head === this.tail) {
      let temp = this.head
      this.head = null
      this.tail = null

      this.length--
      return temp
    }

    // (a) tạo 2 thằng kế nhau
    let pre = this.head
    let temp = pre.next
    pre.next = temp

    // (b) traverse 2 thằng
    while (temp.next) {
      pre = pre.next
      temp = temp.next
    }

    // (c) xoá item và set pointer
    pre.next = null
    temp.prev = null
    this.tail = pre

    // (d)
    this.length--
    return temp.data
  }

  // (2)
  shift() {
    // (***)
    if (!this.head || !this.tail) return undefined
    if (this.head === this.tail) {
      let temp = this.head
      this.head = null
      this.tail = null

      this.length--
      return temp
    }

    // (a)
    let temp = this.head

    // (b) dời head sang kế bên
    this.head = temp.next

    // (c) ngắt kế nối
    this.head.prev = null
    temp.next = null

    // (d)
    this.length--
    return temp.data
  }
}

const list = new DoublyLinkedList()

list.push(10)
list.push(20)
list.push(30)
list.push(40)
list.push(50)
list.print()

// (3)
console.log('pop', list.pop())
list.print()

// (4)
console.log('shift', list.shift())
list.print()
