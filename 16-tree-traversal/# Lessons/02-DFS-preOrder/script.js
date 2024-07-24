'use strict'
/*
  DEPTH FIRST SEARCH
  - go from top to bottom
  - 3 types: 
    + Pre Order: go all the left side, then right side => this lesson
    + Post Order
    + In Order
  - recursion

  ******************
            10
      6           15
    3   8            20   
  1  4


  function traverse(node) {
    visited.push(node.value)
    if (!node.left && !node.right) return
    if (node.left) traverse(node.left)
    if (node.right) traverse(node.right)
  }


                                traverse(10)
                traverse(6)             traverse(15)
      traverse(3)       traverse(8)           traverse(20)
  traverse(1) traverse(4)     ↓                    ↓      
      ↓           ↓         return               return
    return       return


  **********************
  Demo:
  - Result we want: [10 6 3 8 15 20]
  
            10
      6           15
    3   8            20   

  - Create result array: 
      visited     []

  ++++++
  Step 1: add root to visited array
  - visited     [10]

  ++++++
  Step 2: left side of 10 
    visited     [10, 6]

  ++++++
  Step 3: left side of 6
    visited [10, 6, 3]

  ++++++
  Step 4: 3 has no left child => go to right side of 6
    visited [10, 6, 3, 8]

  ++++++
  Step 5: 8 has no left child => go right side of 10
    visited [10, 6, 3, 8, 15]

  ++++++
  Step 6: 
    visited [10, 6, 3, 8, 15, 20]


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

  /*
            10
      6           15
    3   8            20   
*/

  DFSPreOrder() {
    let visited = []

    function traverse(node) {
      visited.push(node)

      if (!node.left && !node.right) return
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }

    if (!this.root) return []

    traverse(this.root)

    return visited
  }
}

const tree = new BinarySearchTree()
tree.insert(30)
tree.insert(10)
tree.insert(15)
tree.insert(10)
tree.insert(50)
tree.insert(5)
tree.insert(17)
tree.insert(39)
tree.insert(45)
/*
            30
    10              50
  5   15        39
        17        45
*/

// (2)
console.log(tree.DFSPreOrder()) // [30,10,5,15,17,50,39,45]
