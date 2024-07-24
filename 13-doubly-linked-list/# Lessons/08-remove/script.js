/*
  Remove
  - remove(4)
    1 <-> 2 <-> 3 <-> 4 <-> 5 <-> 6 <-> 7
    h                                   t

  ****************
  - pre = get(index-1) = get(3) = (4)
  - del = pre.next
  - aft = del.next
    1 <-> 2 <-> 3 <-> 4 <-> 5 <-> 6 <-> 7
    h                 pre  del   aft    t

  
  - del.next = null
  - del.prev = null
  - pre.next = aft
  - aft.prev = pre
    1 <-> 2 <-> 3 <-> 4 <-> 6 <-> 7           5
    h                 pre  aft    t          del

*/

class Node {
  constructor(val) {
    this.data = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }
  push(val) {
    const newNode = new Node(val)

    if (!this.head || !this.tail) {
      this.head = newNode
      this.tail = newNode
      newNode.prev = null
      newNode.next = null

      this.length++
      return this
    }

    newNode.prev = this.tail
    newNode.next = null
    this.tail.next = newNode
    this.tail = newNode

    this.length++
    return this
  }
  traverse() {
    let result = ''
    let count = 0
    let current = this.head

    console.log('**********************')
    while (current) {
      result += count === 0 ? current.data : ' <-> ' + current.data
      current = current.next
      count++
    }
    console.log(result)
  }
  print() {
    let currentNode = this.head
    const arr = []

    while (currentNode) {
      arr.push(currentNode.data)
      currentNode = currentNode.next
    }

    console.log(arr)
  }
  pop() {
    if (!this.head || !this.tail) return undefined
    if (this.head === this.tail) {
      let temp = this.head
      this.head = null
      this.tail = null

      this.length--
      return temp
    }

    let pre = this.head
    let temp = pre.next
    pre.next = temp

    while (temp.next) {
      pre = pre.next
      temp = temp.next
    }

    pre.next = null
    temp.prev = null
    this.tail = pre

    this.length--
    return temp.data
  }
  shift() {
    if (!this.head || !this.tail) return undefined
    if (this.head === this.tail) {
      let temp = this.head
      this.head = null
      this.tail = null

      this.length--
      return temp
    }

    let temp = this.head
    this.head = temp.next

    this.head.prev = null
    temp.next = null

    this.length--
    return temp.data
  }
  unshift(val) {
    const newNode = new Node(val)

    if (!this.head || !this.tail) {
      this.head = newNode
      this.tail = newNode
      newNode.prev = null
      newNode.next = null

      this.length++
      return this
    }

    newNode.prev = null
    newNode.next = this.head

    this.head = newNode

    this.length++
    return this
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined

    const center = Math.floor(this.length / 2)
    let traverseFromTail = false
    let count = 0
    let current = this.head

    if (index > center) {
      traverseFromTail = true
      index = this.length - 1 - index
      current = this.tail
    }
    while (count < index && !traverseFromTail) {
      current = current.next
      count++
    }
    while (count < index && traverseFromTail) {
      current = current.prev
      count++
    }

    return current
  }
  set(index, value) {
    const item = this.get(index)

    if (!item) return false

    item.data = value

    return true
  }
  insert(index, value) {
    if (index < 0 || (index >= this.length && index !== 0)) return false

    if (index === 0) return !!this.unshift(value)

    if (index === this.length - 1) return !!this.push(value)

    const pre = this.get(index - 1)
    const aft = pre.next
    const newNode = new Node(value)

    newNode.next = aft
    newNode.prev = pre
    pre.next = newNode
    aft.prev = newNode

    this.length++
    return true
  }

  remove(index) {
    if (index < 0 || this.length === 0 || (index >= this.length && index !== 0))
      return false

    if (index === 0) return this.shift()

    if (index === this.length - 1) return this.pop()

    const pre = this.get(index - 1)
    const del = pre.next
    const aft = del.next

    del.next = null
    del.prev = null
    pre.next = aft
    aft.prev = pre

    this.length--
    return true
  }
}

const list = new DoublyLinkedList()

// Case 1: no item
// list.traverse()
// list.remove(0)
// list.remove(-1)
// list.remove(99)
// list.traverse()

// Case 2: has 1 item
// list.push(1)
// list.traverse()
// list.remove(99)
// list.remove(-1)
// list.remove(0)
// list.traverse()

// Case 3: multiple items
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push(6)
list.push(7)
list.traverse() // [1, 2, 3, 4, 5, 6, 7]
list.remove(-1)
list.remove(99)
list.traverse() // [1, 2, 3, 4, 5, 6, 7]
list.remove(0)
list.traverse() // [2, 3, 4, 5, 6, 7]
list.remove(5)
list.traverse() // [2, 3, 4, 5, 6]
list.remove(3)
list.traverse() // [2, 3, 4, 6]
