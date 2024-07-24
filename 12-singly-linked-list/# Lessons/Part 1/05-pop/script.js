'use strict'
/*
  Pop
  - remove at the end 
  - need 2 extra pointers (pre & temp)
  - https://visualgo.net/en/list
  - pic
  - O(n)

  ++++++++++++++++
  Empty LL:
  - return undefined


  ++++++++++++++++
  Only 1 element: head===tail
            tail
              ↓ 
    head -> (10 | next) -> null


  ++++++++++++++++
  At least 2 items: need to use 2 extra pointers that are placed next to each other. The temp pointer is used to place the pre pointer right before the last element
  - pre = head
  - temp = head.next
    pre     temp           tail
      ↓      ↓              ↓ 
    head -> (10 | next) -> (20 | next) -> null


  - while temp.next
      pre = pre.next
      temp = temp.next
                          tail
                            ↓ 
    head -> (10 | next) -> (20 | next) -> null
              ↑             ↑
            pre            temp


  - pre.next = null (or tail.next = null)
  - tail = pre
  - length--
            tail
              ↓
    head -> (10 | next) -> null             (20 | next) -> null
              ↑                               ↑
            pre                             temp


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
    // LL empty
    if (!this.head) return undefined

    // LL chỉ có 1 item >> this.length === 0
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
      this.length = 0

      return this
    }

    // LL has at least 2 items
    let pre = this.head
    let temp = this.head.next

    while (temp.next) {
      pre = pre.next
      temp = temp.next
    }

    this.tail = pre
    this.tail.next = null // or pre.next = null
    this.length--

    return this
  }
}

const list = new SinglyLinkedList()
list.push(10)
list.push(20)
list.push(30)

list.pop()

list.push(25)
list.push(43)

console.log(list)
