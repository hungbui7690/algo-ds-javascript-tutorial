'use strict'
/*
  Push + Print
  - pic

  *************
  Empty 
  - head = tail = null
      head -> null <- tail

  - push(10)
                head
                  ↓
    null <- pre |10| next -> null
                  ↑
                tail
    

  *************
  Only 1 item
              head
                ↓
    null <- pre |10| next -> null
                ↑
              tail

  +++++++
  push(20)
                head
                  ↓
    null <- pre |10| next -> null
                  ↑
                tail


  +++++++
  - newNode.prev = this.tail => set newNode.pre = previous node
                head
                  ↓
    tail <- pre |10| next <- pre |20| next -> null
                  ↑    ↓
                tail  null


  - this.tail.next = newNode
                head
                  ↓
    tail <- pre |10| next <-> pre |20| next -> null
                  ↑
                tail


    this.tail = newNode
                head
                  ↓
    tail <- pre |10| next <-> pre |20| next -> null
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

    // case 1: no item
    if (!this.head || !this.tail) {
      this.head = newNode
      this.tail = newNode
      newNode.prev = null
      newNode.next = null

      this.length++
      return this
    }

    // case 2: has item
    newNode.prev = this.tail
    newNode.next = null // no need this step > since default newNode.next is null

    this.tail.next = newNode
    this.tail = newNode

    this.length++
    return this
  }

  traverse() {
    let result = ''
    let count = 0
    let current = this.head
    console.log(current)

    console.log('**********************')
    while (current) {
      result += count === 0 ? current.data : ' <-> ' + current.data
      current = current.next
      console.log(current)
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
}

const list = new DoublyLinkedList()

list.push(10)
list.push(20)
list.push(30)
list.print()
list.traverse()
