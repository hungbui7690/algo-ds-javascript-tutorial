'use strict'
/*
  - Sử dụng Linked List (Singly/Doubly) đều đc 
  - chúng ta sẽ bưng bên LL sang đây và apply, nhưng: 
    + ko sử dụng pop() và push() >> vì phải traverse từ đầu tới cuối
    + thay vào đó chúng ta sẽ sử dụng unshift() và shift() >> nhưng tên vẫn đặt là push() + pop() 
      - thực ra tên cũng có thể đặt là add và remove, nhưng nên sử dụng push và pop 

//////////////////////////////////////////////////////

  BIG O 
  - Insertion: O(1)
  - Removal: O(1)

  - Search: O(N)
  - Access: O(N)
    > Search và Access ko quan trọng, bởi vì nếu muốn Search và Access >> nên sử dụng Array chứ ko cần Stack làm gì

*/

// (1)
class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

// (2)
class Stack {
  // (a)
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // (b)
  push(value) {
    const newNode = new Node(value)

    if (!this.head || !this.tail) {
      this.head = newNode
      this.tail = newNode
      this.length++

      return newNode
    }

    newNode.next = this.head
    this.head = newNode

    this.length++
    return newNode
  }

  // (c)
  pop() {
    if (!this.head || !this.tail) return null

    const temp = this.head

    if (this.head === this.tail) {
      this.head = this.tail = null
      temp.next = null

      this.length--
      return temp
    }
    this.head = temp.next
    temp.next = null

    this.length--
    return temp
  }
}

const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)

console.log(stack.pop())

console.log(stack)
