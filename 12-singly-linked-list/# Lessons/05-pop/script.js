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
  traverse() {
    let current = this.head

    while (current) {
      console.log(current.data)
      current = current.next
    }
  }

  // (1)
  pop() {
    // (a) LL empty
    if (!this.head) return undefined

    // (b) LL chỉ có 1 item >> this.length === 0
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
      this.length = 0

      return this
    }

    // (c) LL có ít nhất 2 items
    let pre = this.head
    let temp = this.head.next

    while (temp.next) {
      pre = pre.next
      temp = temp.next
    }

    this.tail = pre
    this.tail.next = null // hoặc pre.next = null cũng đc
    this.length--

    return this
  }
}

const list = new SinglyLinkedList()
list.push(10)
list.push(20)
list.push(30)

// (2)
list.pop()

list.push(25)
list.push(43)
list.pop()
list.pop()
list.pop()
list.pop()

console.log(list)
