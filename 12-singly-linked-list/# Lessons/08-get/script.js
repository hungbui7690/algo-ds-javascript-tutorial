'use strict'
/*
  > https://visualgo.net/en/list

  - ko có indexes 
  - random access is not allowed >> phải traverse

//////////////////////////////////////////////////////

  GET
  - truyền vào số >> nhân đc giá trị 

  10 => 20 => 30 => 33 => 19 => 26
  > get(3) = 30


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
  shift() {
    if (this.length === 1) {
      this.head = null
      this.tail = null
      this.length = 0

      return this
    }

    if (this.length === 0) return undefined

    let temp = this.head
    this.head = this.head.next
    temp.next = null
    this.length--

    return this
  }
  unshift(val) {
    const newNode = new Node(val)

    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
      this.head.next = this.tail.next = null
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }

  // (1)
  get(index) {
    // (a)
    if (index < 0 || index >= this.length) return null

    // (b)
    if (index === 0) return this.head

    // (c)
    let temp = this.head
    let count = 0

    // (d)
    while (temp && count < index) {
      temp = temp.next
      count++
    }

    // (e)
    return temp
  }
}

const list = new SinglyLinkedList()
list.push(10)
list.push(20)
list.push(30)
list.unshift(5)

list.traverse()

// (2)
console.log(list.get(-1))
console.log(list.get(100))
console.log(list.get(0))
console.log(list.get(1))
console.log(list.get(2))
