'use strict'
/*
  Get 
  - passing index -> get the value

  +++++++++++++
  get(3)
  - temp = head
          temp
            ↓
    head -> 10 -> 20 -> 30 -> 33 -> 19 -> 26


  - while (temp && count < index) 
      temp = temp.next
      count++

    + count = 0   < 3
                temp
                  ↓
    head -> 10 -> 20 -> 30 -> 33 -> 19 -> 26

    + count = 1   < 3
                        temp
                          ↓
      head -> 10 -> 20 -> 30 -> 33 -> 19 -> 26

    + count = 2   < 3
                            temp
                              ↓
    head -> 10 -> 20 -> 30 -> 33 -> 19 -> 26

  => return temp = 33

*/

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
    let result = ''
    let count = 0
    let current = this.head

    console.log('**********************')
    while (current) {
      result += count === 0 ? current.data : ' -> ' + current.data
      current = current.next
      count++
    }
    console.log(result)
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
}

const list = new SinglyLinkedList()
list.push(10)
list.push(20)
list.push(30)
list.unshift(5)

list.traverse() // 5 -> 10 -> 20 -> 30

console.log(list.get(-1)) // null
console.log(list.get(100)) // null
console.log(list.get(0)) // 5
console.log(list.get(1)) // 10
console.log(list.get(2)) // 20
