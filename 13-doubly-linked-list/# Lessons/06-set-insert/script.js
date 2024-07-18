'use strict'
/*
  > https://visualgo.net/en/list

//////////////////////////////////////////////////////

  SET
  - set(index, value)
    > found
      + set lại data=value 
      + return true
    > notfound: 
      + return false

//////////////////////////////////////////////////////

  INSERT
  - insert(index, value)
    > insert(0, value) >> unshift()
    > insert(length, value) >> push()
    > insert(2, value) >> get(2)

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
  pop() {
    let pre = this.head
    let temp = pre.next
    pre.next = temp

    while (temp.next) {
      pre = pre.next
      temp = temp.next
    }

    pre.next = null
    temp.prev = null
    this.tail = pre

    this.length--
    return temp.data
  }
  shift() {
    let temp = this.head
    this.head = temp.next

    this.head.prev = null
    temp.next = null

    this.length--
    return temp.data
  }
  unshift(val) {
    const newNode = new Node(val)

    if (!this.head || !this.tail) {
      this.head = newNode
      this.tail = newNode
      newNode.prev = null
      newNode.next = null

      this.length++
      return this
    }

    newNode.prev = null
    newNode.next = this.head

    this.head = newNode

    this.length++
    return this
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined

    const center = Math.floor(this.length / 2)
    let traverseFromTail = false
    let count = 0
    let current = this.head

    if (index > center) {
      traverseFromTail = true
      index = this.length - 1 - index
      current = this.tail
    }
    while (count < index && !traverseFromTail) {
      current = current.next
      count++
    }
    while (count < index && traverseFromTail) {
      current = current.prev
      count++
    }

    return current
  }

  // (1)
  set(index, value) {
    // (a) find item
    const item = this.get(index)

    // (b) nếu ko có item
    if (!item) return false

    // (c) set data nếu tìm ra
    item.data = value

    // (d)
    return true
  }

  // (2)
  insert(index, value) {
    // (***)
    if (index < 0 || (index >= this.length && index !== 0)) return false

    // (a)
    if (index === 0) return !!this.unshift(value)

    // (b)
    if (index === this.length - 1) return !!this.push(value)

    // (c)
    const pre = this.get(index - 1)
    const aft = pre.next // sử dụng pre.next mà ko sử dụng get() là để tránh traverse thêm 1 lần nữa

    // (d)
    const newNode = new Node(value)

    // (e)
    newNode.next = aft
    newNode.prev = pre
    pre.next = newNode
    aft.prev = newNode

    // (f)
    this.length++
    return true
  }
}

const list = new DoublyLinkedList()

// list.push(1)
// list.push(2)
// list.push(3)
// list.push(4)
// list.push(5)
// list.push(6)
// list.push(7)
// list.print() // [1, 2, 3, 4, 5, 6, 7]

// (3)
// list.set(99, 1.5) // sai index
// list.set(-1, 1.5) // sai index
// list.set(1, 1.5) // [1, 1.5, 3, 4, 5, 6, 7]
// list.print()

// (***) ở mỗi case thì comment ở trên lại
// (4a) CASE 1a: chưa có item + sai index
// list.insert(-1, 99)
// list.insert(99, 99)
// list.print()

// (4b) CASE 1b: chưa có item + index đúng
// list.insert(0, 98)
// list.insert(0, 100)
// list.print()

// (4c) CASE 2: có 1 item
// list.push(1)
// list.insert(0, 100)
// list.print()

// (4d) CASE 3: có nhiều item
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push(6)
list.print()

list.insert(-1) // sai index
list.insert(99) // sai index
list.insert(0, 3) // [3, 1, 2, 3, 4, 5, 6]
list.print()
list.insert(2, 99) // [3, 1, 99, 2, 3, 4, 5, 6]
list.print()
list.insert(7, 79) // [3, 1, 99, 2, 3, 4, 5, 6, 79]
list.print()
