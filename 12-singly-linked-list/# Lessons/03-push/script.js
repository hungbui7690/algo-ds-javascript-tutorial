'use strict'
/*
  > https://visualgo.net/en/list

  - ko có indexes 
  - random access is not allowed >> phải traverse

//////////////////////////////////////////////////////

  PUSH 
  - PIC

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

  // (1) check visu algo để xem head/tail point tới đâu
  push(val) {
    // (a)
    const newNode = new Node(val)

    // (b) nếu chưa có node nào trong list >> condition cũng có thể là this.length === 0
    if (!this.head) {
      this.head = newNode
      this.tail = this.head // tail và head đều point tới cùng 1 node
    } else {
      // (c) trường hợp đã có element >> phải nằm trong else, chứ ko đc nằm ngoài >> nếu nằm ngoài: inf loop
      this.tail.next = newNode // (i) element cũ point tới element mới
      this.tail = newNode // (ii) dời tail sang element mới
    }
    // (d)
    this.length++

    // (e)
    return this
  }
}

const list = new SinglyLinkedList()
console.log(list)

// (2)
list.push(10)
list.push(20)
list.push(30)
console.log(list)
