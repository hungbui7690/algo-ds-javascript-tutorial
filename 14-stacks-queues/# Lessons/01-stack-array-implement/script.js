'use strict'
/*

  INFO
  - pics
  - stacks chỉ là concept (FILO)

  CREATE STACKS USING ARRAY
  - chỉ có thể sử dụng 1 trong 2 cách để tạo stack với array: 
    + push() + pop() 
    + unshift() + shift() >>> nhưng cách này ko tốt, vì chúng ta phải reindex


*/

//////////////////////////////////////////////////////

class Stack {
  // (a)
  constructor(value) {
    this.items = []
    this.length = 0 // ko dùng length này cũng đc >> có thể sử dụng this.items.length
  }

  // (b)
  push(element) {
    this.items.push(element)
    this.length++

    return this
  }

  // (c)
  pop() {
    if (this.items.length > 0) {
      this.length--
      return this.items.pop()
    }
    return undefined
  }

  // (d) peek the last item in the stack
  peek() {
    return this.items[this.length - 1] // hoặc this.items[this.items.length -1]
  }

  // (e)
  isEmpty() {
    return this.length == 0
  }

  // (f) the size of the stack
  size() {
    return this.length
  }

  // (g)
  clear() {
    this.items = []
  }
}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)

console.log(stack.peek()) // 30
console.log(stack.peek()) // 30
console.log(stack.pop()) // 20
