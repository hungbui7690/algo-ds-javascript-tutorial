'use strict'
/*
  Depth First Search
  - Post Order: 
    > go down to bottom left
    > from left to right
    > after finish, then go up


  ********************
  function traverse(node) 
    if (node.left) traverse(node.left)
    if (node.right) traverse(node.right)
    visited.push(node.value)
    
  ********************
  Demo:
  - Result we want: [3 8 6 20 15 10]

            10
      6           15
    3   8            20    

  Step 1:
  - start at 10
  - go down to 6
  - left of 6 is 3
  - right of 6 is 8
  - result = [3, 8]

  Step 2:
  - After finish left & right of 6 => then add 6 => this is why we call Post Order
  - result = [3, 8, 6]

  Step 3:
  - Go back to 10, now to the right of 10
  - go down to 15
  - left of 15 has nothing
  - right of 15 is 20
  - result = [3, 8, 6, 20]
  
  Step 4:
  - Done left & right of 15 => then add 15  
  - result = [3, 8, 6, 20, 15]

  Step 5:   
  - Done left & right of 10 => then add 10
  - result =   [3, 8, 6, 20, 15, 10]

  @@ Add all children before add parent

*/

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class Queue {
  constructor() {
    this.items = []
  }
  push(val) {
    return this.items.push(val)
  }
  dequeue() {
    return this.items.shift()
  }
  isEmpty() {
    return this.items.length === 0
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(value) {
    const newNode = new Node(value)
    if (!this.root) {
      this.root = newNode
      return this
    }
    let current = this.root
    while (true) {
      if (value < current.value) {
        if (current.left) current = current.left
        else {
          current.left = newNode
          return this
        }
      } else if (current.value === value) {
        return this
      } else {
        if (current.right) current = current.right
        else {
          current.right = newNode
          return this
        }
      }
    }
  }
  find(value) {
    if (!this.root) return false
    let current = this.root
    while (true) {
      if (value < current.value) {
        if (!current.left) return false
        current = current.left
      } else if (current.value === value) return true
      else {
        if (!current.right) return false
        current = current.right
      }
    }
  }
  BFS() {
    const queue = new Queue()
    let visited = []

    if (!this.root) return []
    queue.push(this.root)

    while (!queue.isEmpty()) {
      const dequeue = queue.dequeue()
      visited.push(dequeue)

      if (dequeue.left) queue.push(dequeue.left)
      if (dequeue.right) queue.push(dequeue.right)
    }
    return visited
  }
  DFSPreOrder() {
    let visited = []

    function traverse(node) {
      visited.push(node.value)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }

    if (!this.root) return []
    traverse(this.root)
    return visited
  }

  /*
            10
      6           15
    3   8            20   

      [3, 8, 6, 20, 15, 10]

*/

  DFSPostOrder() {
    const visited = []

    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      visited.push(node.value)
    }

    traverse(this.root)

    return visited
  }
}

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)

/*
            10
      6           15
    3   8            20  
*/

console.log(tree.DFSPreOrder()) // [10, 6, 3, 8, 15, 20]

// (2)
console.log(tree.DFSPostOrder()) // [3, 8, 6, 20, 15, 10]
