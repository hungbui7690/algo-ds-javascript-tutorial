'use strict'
/*
  > https://visualgo.net/en/list

  - ko có indexes 
  - random access is not allowed >> phải traverse

//////////////////////////////////////////////////////

  REVERSE + BIG-O NOTATION + RECAP

============================================

  Đây là trước khi loop (của instructor)

  [1] -> [2] -> [3] -> [4]
  h                    t


  - swap head và tail 
  - next = null
  - pre = null

  node
  [1] -> [2] -> [3] -> [4]
  t                    h
  
============================================

  Đây là trong khi loop

  - next = node.next

  node   next
  [1] -> [2] -> [3] -> [4]


  - node.next = pre (pre đang null)

    
  pre     node   next 
  null <- [1]    [2] -> [3] -> [4]


  - pre = node

          pre
          node   next 
  null <- [1] -> [2] -> [3] -> [4]


  - node = next

          pre     node
                  next 
  null <- [1] ->  [2] -> [3] -> [4]


  ************ Hết 1 vòng ******************
  Sang vòng 2

  - next = node.next
          pre     node
                          next 
  null <- [1] ->  [2] ->  [3] -> [4]


  - node.next = pre

          pre     node
                          next 
  null <- [1] <-  [2] ->  [3] -> [4]

  - pre = node

                  node
                  pre     next 
  null <- [1] <-  [2] ->  [3] -> [4]


  - node = next

                          node
                  pre     next 
  null <- [1] <-  [2] ->  [3] -> [4]

  ************ Hết 2 vòng ******************

  ...

  Làm tương tự tới hết 


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
    if (index < 0 || index > this.length) return false
    if (index === this.length - 1) return !!this.push(value)
    if (index === 0) return !!this.unshift(value)

    const newNode = new Node(value)
    let pre = this.get(index - 1)
    let temp = pre.next

    pre.next = newNode
    newNode.next = temp

    this.length++
    return true
  }

  remove(index) {
    if (index === 0) return !!this.shift()
    if (index < 0 || index > this.length) return false
    if (index === this.length - 1) return !!this.pop()

    let pre = this.get(index - 1)
    let del = pre.next
    let aft = del.next

    pre.next = aft
    del.next = null

    this.length--
    return true
  }

  // (***) Đây là bản của Instructor >> cần hàm print bên dưới
  reverse() {
    // (a) swap head và tail
    let node = this.head
    this.head = this.tail
    this.tail = node

    // (b)
    let next = null
    let pre = null

    // (c)
    for (let i = 0; i < this.length; i++) {
      next = node.next
      node.next = pre
      pre = node
      node = next
    }
    return this
  }

  // (***)
  print() {
    let arr = []
    let current = this.head
    while (current) {
      arr.push(current.data)
      current = current.next
    }

    console.log(arr)
  }
}

const list = new SinglyLinkedList()

list.push(2)
list.push(15)
list.push(20)
list.push(9)

// (***)
list.print()
list.reverse()
list.print()
