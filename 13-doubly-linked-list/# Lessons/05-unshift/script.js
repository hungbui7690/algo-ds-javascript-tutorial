'use strict'
/*
  Unshift
                head
                  ↓
    null <- pre |10| next <-> pre |20| next <-> pre |30| next -> null
                                                          ↑
                                                        tail

  - new node = 30
    null <- pre |30| next -> null


  *********************
  - newNode.prev = null
  - newNode.next = head
  - head.prev = newNode
                                  head
                                    ↓
    null <- pre |10| next <-> pre |10| next <-> pre |20| next <-> pre |30| next -> null
                                                              ↑
                                                            tail


  - head = newNode
                head
                  ↓
    null <- pre |10| next <-> pre |10| next <-> pre |20| next <-> pre |30| next -> null
                                                              ↑
                                                            tail

*/

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
  traverse() {
    let result = ''
    let count = 0
    let current = this.head

    console.log('**********************')
    console.log(current)
    while (current) {
      result += count === 0 ? current.data : ' <-> ' + current.data
      current = current.next
      count++
    }
    console.log(result)
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
    // this.head.prev = newNode
    this.head = newNode

    this.length++
    return this
  }
}

const list = new DoublyLinkedList()

list.push(10)
list.push(20)
list.push(30)
list.push(40)
list.push(50)
list.traverse()

list.unshift(5)
list.unshift(1)
list.traverse()
