'use strict'
/*
  > https://visualgo.net/en/list

  - ko có indexes 
  - random access is not allowed >> phải traverse

//////////////////////////////////////////////////////

  INSERT
  - insert(index, value)
  - 3 cases: 
    + index = 0 >> unshift
    + index = length >> push
    + insert ở giữa 
  
  >> PIC

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

    console.log('**********************')
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
  get(index) {
    if (index < 0 || index >= this.length) return null
    if (index === 0) return this.head

    let temp = this.head
    let count = 0

    while (temp && count < index) {
      temp = temp.next
      count++
    }

    return temp
  }
  set(index, value) {
    let temp = this.get(index)
    if (!temp) return false

    temp.data = value
    return true
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false
    if (index === this.length - 1) return !!this.push(value)
    if (index === 0) return !!this.unshift(value)

    const newNode = new Node(value)
    let pre = this.get(index - 1)
    let temp = pre.next

    pre.next = newNode
    newNode.next = temp

    this.length++
    return true
  }

  // (1)
  remove(index) {
    // (a)
    if (index === 0) return !!this.shift()

    // (b)
    if (index < 0 || index > this.length) return false

    // (c)
    if (index === this.length - 1) return !!this.pop()

    // (d)
    let pre = this.get(index - 1)
    let del = pre.next
    let aft = del.next

    // (e)
    pre.next = aft
    del.next = null

    // (f)
    this.length--
    return true
  }
}

const list = new SinglyLinkedList()

// (2a) TEST CASE 1: no item
// console.log(list.remove(2)) // sai index
// console.log(list.remove(-100)) // sai index
// console.log(list.remove(0))

// (2b) TEST CASE 2: sai index
// console.log(list.insert(-1))
// console.log(list.insert(100))

// (2c) TEST CASE 3: chỉ có 1 item trong list
// list.push(10)
// console.log(list.remove(3)) // sai index
// console.log(list.remove(1)) // remove theo length

// (2d) có nhiều item
list.push(2)
list.push(15)
list.push(9)
// console.log(list.remove(0)) // remove item đầu tiên
// console.log(list.remove(2)) // remove item cuối
// console.log(list.remove(1)) // remove item ở giữa

list.traverse()
