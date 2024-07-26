'use strict'
/*
  Use LinkedList
  - We can use SinglyLinkedList or DoublyLinkedList
  - shouldn't use pop & push -> O(n)
  - instead of that, we use shift & unshift => but still use the name of push & pop
  
  BIG O 
  - Insertion: O(1)
  - Removal: O(1)
  - Search: O(N)
  - Access: O(N)
    + Search & Access is not important -> because if we want to Search & Access, we should use Array

*/

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class Stack {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

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
