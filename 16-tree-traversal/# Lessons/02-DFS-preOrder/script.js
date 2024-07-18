'use strict'
/*

//////////////////////////////////////////////////////

  DEPTH FIRST SEARCH
  - đều đi từ trên xuống
  - có 3 loại:
    + PRE ORDER (bài này)
    + POST ORDER
    + INORDER
  - recursive

////////////////////////////////////
  Kết quả mong muốn: 
  - [10 6 3 8 15 20]

            10
      6           15
    3   8            20   

//////////////////////////////////// 
  
  
  - đi hết bên trái, rồi đi bên phải

  (1)
  visited [10]
  
  (2) bên trái của 10
  visited [10, 6]

  (3) bên trái của 6
  visited [10, 6, 3]

  (4) 3 hết >> đi bên phải của 6
  visited [10, 6, 3, 8]

  (5) hết bên trái của 10, đi bên phải của 10
  visited [10, 6, 3, 8, 15]

  (6) 
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

  // (1)
  DFSPreOrder() {
    // (a)
    let visited = []

    // (***)
    function traverse(node) {
      visited.push(node.value)
      // của instructor ko có dòng này
      if (!node.left && !node.right) return
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }

    // (b)
    if (!this.root) return []

    // (c)
    traverse(this.root)

    // (d)
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
