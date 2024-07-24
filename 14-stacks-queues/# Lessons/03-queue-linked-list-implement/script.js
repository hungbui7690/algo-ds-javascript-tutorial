/*
  Queues
  - using array to implement is not ok
  - FIFO use push O(1) + shift O(n) or unshift O(n) + pop O(1) => need to re-index => NOT IDEAL
  - using SinglyLinkedList is ok, because we have Head & Tail
    + enqueue
      > unshift O(1) + dequeue: pop O(n) => NOT GOOD
      > push O(1) + shift O(1) => GOOD

  BIG-O
  - Insert  - O(1)
  - Removal - O(1)
  - Search  - O(N) => if we want to Search & Access => shouldn't use Queue
  - Access  - O(N)
*/

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  enqueue(val) {
    const newNode = new Node(val)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    return ++this.size
  }

  dequeue() {
    if (!this.head) return null

    let temp = this.head
    this.head = temp.next
    this.size--

    return temp.value
  }
}

const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue)
console.log(queue.dequeue())
console.log(queue)
console.log(queue.dequeue())
console.log(queue)
console.log(queue.dequeue())
console.log(queue)
