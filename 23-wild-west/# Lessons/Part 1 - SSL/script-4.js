/*
  SLL - get Exercise
  - Implement the following on the SinglyLinkedList class

    get
    # This function should find a node at a specified index in a SinglyLinkedList. It should return the found node.

*/

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val) {
    var newNode = new Node(val)
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
  get() {
    // CODE GOES HERE
  }
}

var singlyLinkedList = new SinglyLinkedList()

singlyLinkedList.push(5).push(10).push(15).push(20)
singlyLinkedList.get(0).val // 5
singlyLinkedList.get(1).val // 10
singlyLinkedList.get(2).val // 15
singlyLinkedList.get(3).val // 20
singlyLinkedList.get(4) // null
