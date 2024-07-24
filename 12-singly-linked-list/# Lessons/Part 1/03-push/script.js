'use strict'
/*
  Push
  - O(1)
  - https://visualgo.net/en/list
  - pic

  ++++++++++++++    
  No Element: 

            tail      
              ↓
    head -> null

  ++++++++++++++  
  Push 10:
  - head = tail = newNode
  - length++

              tail
                ↓ 
      head -> (10 | next) -> null

  ++++++++++++++
  Push 20: 
  - last element points to newNode
    > tail.next = newNode
              tail
                ↓ 
      head -> (10 | next) -> (20 | next) -> null


  - move tail pointer to new node
    > tail = newNode
                            tail
                              ↓ 
      head -> (10 | next) -> (20 | next) -> null


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

  // check visualgo check see head/tail points to
  push(val) {
    const newNode = new Node(val)

    // in case there is no node in list => can use this.length === 0
    if (!this.head) {
      this.head = newNode
      this.tail = this.head // tail & head point to the same node
    } else {
      // in case there is element => must be in else clause, otherwise, inf loop
      this.tail.next = newNode // old element points to new element
      this.tail = newNode // move tail to the new node
    }
    this.length++
    return this
  }
}

const list = new SinglyLinkedList()
console.log(list)

list.push(10)
list.push(20)
list.push(30)
console.log(list)
