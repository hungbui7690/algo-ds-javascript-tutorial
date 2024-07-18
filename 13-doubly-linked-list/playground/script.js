'use strict'
/*
  > https://visualgo.net/en/list

//////////////////////////////////////////////////////

  REVERSE 


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
    if (!this.head || !this.tail) return undefined
    if (this.head === this.tail) {
      let temp = this.head
      this.head = null
      this.tail = null

      this.length--
      return temp
    }

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
    if (!this.head || !this.tail) return undefined
    if (this.head === this.tail) {
      let temp = this.head
      this.head = null
      this.tail = null

      this.length--
      return temp
    }

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
  set(index, value) {
    const item = this.get(index)

    if (!item) return false

    item.data = value

    return true
  }
  insert(index, value) {
    if (index < 0 || (index >= this.length && index !== 0)) return false

    if (index === 0) return !!this.unshift(value)

    if (index === this.length - 1) return !!this.push(value)

    const pre = this.get(index - 1)
    const aft = pre.next // sử dụng pre.next mà ko sử dụng get() là để tránh traverse thêm 1 lần nữa

    const newNode = new Node(value)

    newNode.next = aft
    newNode.prev = pre
    pre.next = newNode
    aft.prev = newNode

    this.length++
    return true
  }

  remove(index) {
    if (index < 0 || this.length === 0 || (index >= this.length && index !== 0))
      return false

    if (index === 0) return this.shift()

    if (index === this.length - 1) return this.pop()

    const pre = this.get(index - 1)
    const del = pre.next
    const aft = del.next

    del.next = null
    del.prev = null
    pre.next = aft
    aft.prev = pre

    this.length--
    return true
  }

  /*
          
  next     node    pre
  null <->  1  <->  2  <->  3  <->  4



*/

  reverse() {
    if (this.length < 2) return this

    let next = null
    let node = this.head
    let pre = node.next

    // (c) swap head vs tail
    this.head = this.tail
    this.tail = node

    while (next) {
      node.next = next
      node.prev = pre
    }
  }
}

const list = new DoublyLinkedList()

list.push(1)
list.push(2)
// list.push(3)
// list.push(4)
// list.push(5)
// list.push(6)
// list.push(7)
list.print() // [1, 2, 3, 4, 5, 6, 7]

list.reverse()
// console.log(list)
list.print()
