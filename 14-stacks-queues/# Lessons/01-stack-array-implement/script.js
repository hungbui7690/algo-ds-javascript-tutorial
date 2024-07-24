/*
  Info
  - pic
  - stacks is just concept (FILO)

  Create Stacks Using Array
  - use any method below to create stack with array
    + push + pop
    + unshift + shift => but this method is not good, because we need to re-index

*/

class Stack {
  constructor(value) {
    this.items = []
    this.length = 0 // or cannot use length or can use this.items.length
  }
  push(element) {
    this.items.push(element)
    this.length++

    return this
  }
  pop() {
    if (this.items.length > 0) {
      this.length--
      return this.items.pop()
    }
    return undefined
  }

  // peek the last item in the stack
  peek() {
    return this.items[this.length - 1] // or this.items[this.items.length -1]
  }
  isEmpty() {
    return this.length == 0
  }
  size() {
    return this.length
  }
  clear() {
    this.items = []
  }
}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
console.log(stack)

console.log(stack.peek()) // 30
console.log(stack.pop()) // 30
console.log(stack.pop()) // 20
console.log(stack.pop()) // 10
