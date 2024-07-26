/*
  Shift
                head
                  ↓
    null <- pre |10| next <-> pre |20| next <-> pre |30| next <-> pre |40| next -> null
                                                                        ↑
                                                                      tail


  ********************
  - temp = head
  - head = temp.next
                                  head
                                    ↓
    null <- pre |10| next <-> pre |20| next <-> pre |30| next <-> pre |40| next -> null
                  ↑                                                     ↑
                temp                                                   tail


  - head.prev = null
  - temp.next = null
                                      head
                                        ↓
    null <- pre |10| next          pre |20| next <-> pre |30| next <-> pre |40| next -> null
                  ↑                                                          ↑
                temp                                                       tail

  => return temp


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
  print() {
    let currentNode = this.head
    const arr = []

    while (currentNode) {
      arr.push(currentNode.data)
      currentNode = currentNode.next
    }

    console.log(arr)
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
}

const list = new DoublyLinkedList()

list.push(10)
list.push(20)
list.push(30)
list.push(40)
list.push(50)
list.traverse()

console.log('shift', list.shift())
list.traverse()
