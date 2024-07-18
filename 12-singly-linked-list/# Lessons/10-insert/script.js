'use strict'
/*
  > https://visualgo.net/en/list

  - ko có indexes 
  - random access is not allowed >> phải traverse

//////////////////////////////////////////////////////

  INSERT
  - insert(index, value)
  - 3 cases: 
    + index = 0 >> unshift
    + index = length >> push
    + insert ở giữa 
  
  >> PIC

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
    let current = this.head

    console.log('**********************')
    while (current) {
      console.log(current.data)
      current = current.next
    }
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
    if (this.length === 1) {
      this.head = null
      this.tail = null
      this.length = 0

      return this
    }

    if (this.length === 0) return undefined

    let temp = this.head
    this.head = this.head.next
    temp.next = null
    this.length--

    return this
  }
  unshift(val) {
    const newNode = new Node(val)

    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
      this.head.next = this.tail.next = null
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
  get(index) {
    if (index < 0 || index >= this.length) return null
    if (index === 0) return this.head

    let temp = this.head
    let count = 0

    while (temp && count < index) {
      temp = temp.next
      count++
    }

    return temp
  }
  set(index, value) {
    let temp = this.get(index)
    if (!temp) return false

    temp.data = value
    return true
  }

  insert(index, value) {
    // (1) sai index
    if (index < 0 || index > this.length) return false

    // (2) chưa có item nào
    if (this.length === 0) {
      return !!this.unshift(value) // (***) sử dụng !! để return true/false
    }

    // (3) có item
    if (this.length >= 1) {
      // (a)
      if (index === 0) {
        return this.unshift(value)
      }
      // (b)
      else if (index === this.length - 1) return !!this.push(value)
      // (c)
      else {
        if (this.length > 1) {
          // (i)
          let pre = this.get(index - 1)
          let temp = pre.next

          // (ii)
          const node = new Node(value)
          node.next = temp
          pre.next = node

          // (iii)
          this.length++
          return true
        }
      }
    }
  }

  // (***) đây là insert, version của instructor
  insert2(index, value) {
    // (a)
    if (index < 0 || index > this.length) return false

    // (b)
    if (index === this.length - 1) return !!this.push(value)

    // (c)
    if (index === 0) return !!this.unshift(value)

    // (d)
    const newNode = new Node(value)
    let pre = this.get(index - 1)
    let temp = pre.next

    // (e)
    pre.next = newNode
    newNode.next = temp

    // (f)
    this.length++
    return true
  }
}

const list = new SinglyLinkedList()

// (4a) TEST CASE 1: no item
// list.insert(2, 'love') // sai index
// list.insert(0, 'hah')

// (4b) TEST CASE 2: sai index
// console.log(list.insert(-1))
// console.log(list.insert(100))

// (4c) TEST CASE 3: chỉ có 1 item trong list
// list.push(10)
// console.log(list.insert(3, 'beginning')) // sai index
// console.log(list.insert(1, 'beginning'))
// console.log(list.insert(0, 'new'))

// (4d) có nhiều item
// list.push(2)
// list.push(15)
// list.insert(2, ':)')
// list.insert(0, '^^')

list.traverse()
