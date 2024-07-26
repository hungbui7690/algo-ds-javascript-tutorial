/*
  Insert
  - insert(index, value)
  - pic
  - 3 cases: 
    + index = 0 -> unshift
    + index = length -> push
    + insert in the middle of LL

  ******************
  insert(2, 999)
  - pre = this.get(index - 1)
  - temp = pre.next
                  pre  temp
                  ↓     ↓
    head -> 10 -> 20 -> 30 -> 33 -> 19 -> 26


  - pre.next = newNode
  - newNode.next = temp
  
                  pre         temp
                  ↓            ↓
    head -> 10 -> 20 -> 999 -> 30 -> 33 -> 19 -> 26


  @@ return !!this.unshift(value)
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

    if (this.length === 0) {
      return !!this.unshift(value)
    }

    if (this.length >= 1) {
      if (index === 0) {
        return this.unshift(value)
      } else if (index === this.length - 1) return !!this.push(value)
      else {
        if (this.length > 1) {
          let pre = this.get(index - 1)
          let temp = pre.next

          const node = new Node(value)
          node.next = temp
          pre.next = node

          this.length++
          return true
        }
      }
    }
  }

  // instructor version
  insert2(index, value) {
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
}

const list = new SinglyLinkedList()

// Case 1: no item
list.insert(0, 'hah')

// Case 2: wrong index => return false
// console.log(list.insert(-1))
// console.log(list.insert(100))

// Case 3: only 1 item in the LL
list.push(10)
// console.log(list.insert(3, 'beginning')) // wrong index
// console.log(list.insert(1, 'beginning'))
// console.log(list.insert(0, 'new'))

// Case 4: has multiple items
list.push(2)
list.push(15)
list.insert(2, '🎐')
list.insert(0, '⛳')

list.traverse()
