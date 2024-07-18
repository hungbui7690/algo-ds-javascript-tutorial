'use strict'
/*
  > https://visualgo.net/en/list

  - ko có indexes 
  - random access is not allowed >> phải traverse

//////////////////////////////////////////////////////

  TRAVERSE >> POP 
  - PIC
  - POP sẽ tricky, bởi vì phải traverse tới kế cuối để set tail mới 



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

  // (1) chúng ta sẽ ko dùng cách traverse này với pop
  // >> như trong PIC thì phải cần có 2 pointer (temp và pre)
  traverse() {
    // (a)
    let current = this.head

    // (b)
    while (current) {
      console.log(current.data)
      current = current.next
    }
  }
}

const list = new SinglyLinkedList()
console.log(list)

list.push(10)
list.push(20)
list.push(30)

// (2)
list.traverse()
