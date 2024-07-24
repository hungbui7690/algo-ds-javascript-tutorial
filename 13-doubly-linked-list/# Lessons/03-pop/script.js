'use strict'
/*
  Pop
                head
                  ↓
    null <- pre |10| next <-> pre |20| next <-> pre |30| next <-> pre |40| next -> null
                                                                        ↑
                                                                      tail


  +++++++++++++++++++  
  - pre = head
  - temp = pre.next
                head              temp
                  ↓                 ↓
    null <- pre |10| next <-> pre |20| next <-> pre |30| next <-> pre |40| next -> null
                                    ↑                                   ↑
                                  pre                                 tail


  +++++++++++++++++++
  - while (temp.next) 
      pre = pre.next
      temp = temp.next
                head                                temp
                  ↓                                   ↓
    null <- pre |10| next <-> pre |20| next <-> pre |30| next <-> pre |40| next -> null
                                    ↑                                   ↑
                                    pre                               tail

                head                                                  temp
                  ↓                                                     ↓
    null <- pre |10| next <-> pre |20| next <-> pre |30| next <-> pre |40| next -> null
                                                      ↑                 ↑
                                                      pre             tail


  +++++++++++++++++++
  - pre.next = null
  - temp.prev = null
  - this.tail = pre
                head                                tail                temp
                  ↓                                   ↓                   ↓
    null <- pre |10| next <-> pre |20| next <-> pre |30| next       pre |40| next -> null
                                                      ↑                 
                                                      pre               

  => return temp

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
    // case 1: no item
    if (!this.head || !this.tail) return undefined

    // case 2: 1 item
    if (this.head === this.tail) {
      let temp = this.head
      this.head = null
      this.tail = null

      this.length--
      return temp
    }

    // case 3: multiple items
    let pre = this.head // create 2 pointers next to each other
    let temp = pre.next

    // move 2 pointers at the same time (check demonstration above)
    while (temp.next) {
      pre = pre.next
      temp = temp.next
    }

    // delete item & set pointer
    pre.next = null
    temp.prev = null
    this.tail = pre

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
list.traverse()
console.log('pop', list.pop())
list.traverse()
