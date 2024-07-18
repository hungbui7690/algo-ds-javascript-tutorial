'use strict'
/*

//////////////////////////////////////////////////////

  DEPTH FIRST SEARCH
    + POST ORDER
  
////////////////////////////////////
  Kết quả mong muốn: 
  - [3 8 6 20 15 10]

            10
      6           15
    3   8            20   

//////////////////////////////////// 

  (1)
  - start ở 10 
  - đi xuống 6 
  - trái của 6 là 3, phải là 8 

  [3, 8]


  (2)
  - sau khi xong trái và phải của 6 thì mới add 6 
    > (***) đây là lý do vì sao gọi là post order

  [3, 8, 6]


  (3)
  - lên 10, giờ tới bên phải của 10 
  - tới 15 
  - bên trái 15 ko có >> bên phải là 20 

  [3, 8, 6, 20]
  
  
  (4)
  - xong trái phải của 15 
  
  [3, 8, 6, 20, 15]
  
  
  (5)
  - xong trái phải của 10 
  
  [3, 8, 6, 20, 15, 10]

  >> CHECK HẾT CHILDRED TRƯỚC PARENT
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

  // (1)
  DFSPostOrder() {
    const visited = []

    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)

      // (***) y chang bài trước, chỉ đem dòng này xuống dưới
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
