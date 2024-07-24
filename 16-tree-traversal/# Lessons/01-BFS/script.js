/*
  BREATH FIRST SEARCH
  - a tree traversal
  - use queue (use temp array to create fast queue)
    => to save the node (keep track) that we visited
    => apply dequeue & push 
  - add 1 list to save the return result: visited[]
  - start from root


  ******************
  Demo
  - Tree: 
            10
      6           15
    3   8            20   

  - Result that we want: [10 6 15 3 8 20]

  +++++++
  Step 1: put root node into queue
  - queue.push(this.root)

            (10)
      6           15
    3   8            20   

  - queue     [10]
  - visited   []
  
  +++++++
  Step 2: while (!queue.isEmpty())
  - dequeue = queue.dequeue()
  - visited.push(dequeue)      
  - if (dequeue.left) queue.push(dequeue.left)
  - if (dequeue.right) queue.push(dequeue.right)
      
              10
      (6)           (15)
    3   8               20  

  queue     [6, 15]
  visited   [10]     

  +++++++ 
  - dequeue = 6
  - visited.push(6)      
  - queue.push(3)
  - queue.push(8)

            10
        6       (15)
    (3)   (8)        20  

  queue     [15, 3, 8]
  visited   [10, 6]   

  +++++++ 
  Step 4
  - dequeue = 15
  - visited.push(15)      
  - queue.push(20)
            10
        6       15
    (3)   (8)      (20)  

  queue     [3, 8, 20]
  visited   [10, 6, 15]    

  +++++++ 
  Step 5
  - dequeue = 3
  - visited.push(3)      
            10
        6       15
      3     (8)    (20)  

  queue     [8, 20]
  visited   [10, 6, 15, 3]    

  +++++++ 
  Step 6 
  - dequeue = 8
  - visited.push(8)     
            10
        6       15
      3     8     (20)  

  queue     [20]
  visited   [10, 6, 15, 3, 8]    

  +++++++ 
  Step 7
  - dequeue = 20
  - visited.push(20)     
            10
        6       15
      3     8      20

  queue     []
  visited   [10, 6, 15, 3, 8, 20]    

  => Now, queue is empty => Done

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
    const queue = new Queue() // create queue

    let visited = [] // result array

    // in case tree is empty
    if (!this.root) return []

    queue.push(this.root)

    while (!queue.isEmpty()) {
      const dequeue = queue.dequeue() // dequeue
      visited.push(dequeue) // add to visited []

      // if left/right has node => push
      if (dequeue.left) queue.push(dequeue.left)
      if (dequeue.right) queue.push(dequeue.right)
    }
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
/*
          30
      10      50
    5   15
*/

console.log(tree.BFS()) // [30 10 50 5 15]

tree.insert(17)
tree.insert(39)
tree.insert(45)
/*
          30
    10          50
  5   15     39
        17      45
*/

console.log(tree.BFS()) // [30 10 50 5 15 39 17 45]
