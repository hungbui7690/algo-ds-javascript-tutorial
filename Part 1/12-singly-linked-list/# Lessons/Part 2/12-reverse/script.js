'use strict'
/*
  REVERSE
  - need pre pointer

***********************
  Before the while loop
  - swap head và tail (use temp pointer)
    + temp = head
    + head = tail
    + tail = temp

    pre    node   next
    [1] -> [2] -> [3] -> [4]
     t                    h


  - pre.next = node
  - node.next = next

    pre    node   next
    [1] -> [2] -> [3] -> [4]
     t                    h

***********************
  In the while loop: while(next.next)
  - node.next = pre

  pre    node   next
  [1] <- [2]    [3] -> [4]


  - pre = node
        pre
        node   next
  [1] <- [2]    [3] -> [4]


  - node = next
                node
        pre     next
  [1] <- [2]    [3] -> [4]


  - next = next.next
                
          pre    node   next
  [1] <-  [2]    [3] -> [4]

**********************
  After the while loop
  - node.next = pre
  - next.next = node

          pre     node    next
  [1] <-  [2] <-  [3] <-  [4]













***********************
  Before the while loop
  - swap head và tail (use temp pointer)
    + temp = head
    + head = tail
    + tail = temp

    pre    node   next
    [1] -> [2] -> [3] -> [4] -> [5]
     t                           h


  - pre.next = node
  - node.next = next

    pre    node   next
    [1] -> [2] -> [3] -> [4] -> [5]
     t                           h

***********************
  In the while loop
  - node.next = pre

  pre    node   next
  [1] <- [2]    [3] -> [4] -> [5]


  - pre = node
        pre
        node   next
  [1] <- [2]    [3] -> [4] -> [5]


  - node = next
                node
        pre     next
  [1] <- [2]    [3] -> [4] -> [5]


  - next = next.next
                
          pre    node   next
  [1] <-  [2]    [3] -> [4] -> [5]

>>>>>>>>>>>>>>>>>>
  - node.next = pre
          pre    node   next
  [1] <-  [2] <- [3] -> [4] -> [5]

  - pre = node
                pre
                node   next
  [1] <-  [2] <- [3] -> [4] -> [5]

  - node = next
                pre     node
                        next
  [1] <-  [2] <- [3] -> [4] -> [5]

  - next = next.next
                pre     node   next
  [1] <-  [2] <- [3] -> [4] -> [5]


**********************
  After the while loop: while(next.next)
  - node.next = pre
  - next.next = node

                  pre     node    next
  [1] <-  [2] <-  [3] <-  [4] <-  [5]

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

  // version 1
  reverse() {
    let pre = this.head
    let node
    let next
    if (pre.next) node = pre.next
    if (node.next) next = node.next

    let temp = this.head
    this.head = this.tail
    this.tail = temp

    pre.next = null // # this is super important => create inf loop

    while (next.next) {
      node.next = pre
      pre = node
      node = next
      next = next.next
    }

    node.next = pre
    next.next = node
  }

  // version 2: from instructor
  reverseX() {
    let node = this.head // swap head & tail
    this.head = this.tail
    this.tail = node

    let next = null // create next & pre
    let pre = null

    for (let i = 0; i < this.length; i++) {
      next = node.next
      node.next = pre
      pre = node
      node = next
    }
    return this
  }
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

list.push(10)
list.push(20)
list.push(30)
list.push(40)
list.push(50)

list.traverse()

list.reverseX()
list.traverse()
