'use strict'
/*
  > https://visualgo.net/en/list

//////////////////////////////////////////////////////

  GET
  - get(index) 
    > chúng ta traverse từ head hoặc từ tail là tuỳ thuộc vào index

============================================

  [1,2,3,4,5,6] 
  - length  =  6
  - center  =   length / 2
            =  3

  [1,2,3,4,5,6,7] 
  - length  =  7
  - center  =  Math.floor(length / 2)
            =  3

============================================
  [1,2,3,4,[5],6,7] 
  - index = 4, center = 3
  - index > center 
    > traverse từ tail
    > new index = length - 1 - index
                = 7 - 1- 4 = 2
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

    newNode.prev = null
    newNode.next = this.head

    this.head = newNode

    this.length++
    return this
  }

  // (1)
  get(index) {
    // (***)
    if (index < 0 || index >= this.length) return undefined

    // (a) lấy ra điểm giữa
    const center = Math.floor(this.length / 2)
    let traverseFromTail = false
    let count = 0
    let current = this.head

    // (b) check xem nên traverse từ head hay từ tail
    if (index > center) {
      traverseFromTail = true
      index = this.length - 1 - index
      current = this.tail
    }

    // (c) traverse từ head
    while (count < index && !traverseFromTail) {
      current = current.next
      count++
    }
    // (d) traverse từ tail
    while (count < index && traverseFromTail) {
      current = current.prev
      count++
    }

    // (e)
    return current
  }
}

const list = new DoublyLinkedList()

list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push(6)
list.push(7)
list.print()

console.log(list.get(-1)) // undefined
console.log(list.get(99)) // undefined
console.log(list.get(1)) // 2
console.log(list.get(2)) // 3
console.log(list.get(3)) // 4
console.log(list.get(4)) // 5
console.log(list.get(5)) // 6
