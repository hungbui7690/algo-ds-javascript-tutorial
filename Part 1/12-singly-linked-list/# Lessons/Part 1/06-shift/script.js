/*
  Shift 
  - remove from the beginning
  - https://visualgo.net/en/list
  - pic

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
  pop() {
    if (!this.head) return undefined

    if (this.head === this.tail) {
      this.head = null
      this.tail = null
      this.length = 0

      return this
    }

    let pre = this.head
    let temp = this.head.next

    while (temp.next) {
      pre = pre.next
      temp = temp.next
    }

    this.tail = pre
    this.tail.next = null
    this.length--

    return this
  }

  shift() {
    // only 1 node
    if (this.length === 1) {
      this.head = null
      this.tail = null
      this.length = 0

      return this
    }

    // no node
    if (this.length === 0) return undefined

    // more than 1 node
    let temp = this.head
    this.head = this.head.next
    temp.next = null
    this.length--

    return this
  }
}

const list = new SinglyLinkedList()
list.push(10)
list.push(20)
list.push(30)

list.shift() // remove 10

console.log(list) // 20 -> 30
