'use strict'
/*
  > https://visualgo.net/en/list

  - ko có indexes 
  - random access is not allowed >> phải traverse

//////////////////////////////////////////////////////

  */

//////////////////////////////////////////////////////

class Node {
  constructor(val) {
    this.data = val
    this.next = null
  }
}

// đây chỉ mới là node >> bài sau sẽ define linked list class
const first = new Node('hi')
first.next = new Node('there') // tạo node kế tiếp
first.next.next = new Node('how')
first.next.next.next = new Node('are')
first.next.next.next.next = new Node('you')

console.log(first)
console.log(first.next)
console.log(first.next.next)
