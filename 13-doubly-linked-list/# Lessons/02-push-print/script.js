'use strict'
/*
  > https://visualgo.net/en/list


  INTRO 
  - db-linked-list-picture

  NODE
  - có thêm prev

//////////////////////////////////////////////

  PUSH (PIC)


  */

//////////////////////////////////////////////////////

class Node {
  constructor(val) {
    this.data = val
    this.next = null
    this.prev = null // (***) có thêm prev
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }

  // (1)
  push(val) {
    // (a) tạo node
    const newNode = new Node(val)

    // (b) nếu chưa có item nào
    if (!this.head || !this.tail) {
      this.head = newNode
      this.tail = newNode
      newNode.prev = null
      newNode.next = null

      this.length++
      return this
    }

    // (b) trường hợp có item trong list
    newNode.prev = this.tail
    newNode.next = null // ko cần bước này cũng đc, do mặc định new node là null

    // (c) set tail link tới new node
    this.tail.next = newNode

    // (d) dời tail sang node mới
    this.tail = newNode

    // (e)
    this.length++
    return this
  }

  // (2)
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

// (3)
list.push(10)
list.push(20)
list.push(30)
list.print()
