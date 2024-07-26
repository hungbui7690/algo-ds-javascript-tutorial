/*
  Traverse
  - pic
  - pop method is tricky => because we need to traverse to element before last to set the new tail pointer

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

  // 1. we won't use this traverse method with pop
  // in pic, we need to have 2 pointers: temp + pre
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
}

const list = new SinglyLinkedList()
console.log(list)

list.push(10)
list.push(20)
list.push(30)

list.traverse() // 2.
