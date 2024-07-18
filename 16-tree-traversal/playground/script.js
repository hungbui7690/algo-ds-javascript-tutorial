'use strict'
/*

//////////////////////////////////////////////////////

  DEPTH FIRST SEARCH
    + IN-ORDER
  
////////////////////////////////////
  Kết quả mong muốn: 
  - [3 6 8 10 15 20]

            10
      6           15
    3   8            20   

  - trái >> giữa >> phải

//////////////////////////////////// 

  WHICH ONE? 
  - pic
  - DFS dùng cho tree rộng
  - BFS dùng cho tree cao 
    >> đỡ tốn memory

  - InOrder dùng để tạo ra sorted array 
  - PreOrder sẽ giúp chúng ta lưu đc structure của tree, dễ lưu vào db và lấy ra 
  - PostOrder: vô dụng ???? 

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

  // (1)
  DFSInOrder() {
    const visited = []
    function traverse(node) {
      if (node.left) traverse(node.left)

      // (***) dời vô giữa
      visited.push(node.value)

      if (node.right) traverse(node.right)
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
console.log(tree.DFSPostOrder()) // [3, 8, 6, 20, 15, 10]
console.log(tree.DFSInOrder()) // [3, 6, 8 10, 15, 20]
