'use strict'
/*

//////////////////////////////////////////////////////

  BREATH FIRST SEARCH
  - sử dụng queue (dùng tạm array để tạo queue cho nhanh):
    + để chứa node (keep track) mà chúng ta đã visit 
  - thêm 1 list chứa kết quả trả về
  - apply dequeue và push vào để sao cho kết quả ra đúng nhất 
  - bắt đầu từ root 


  Kết quả mong muốn: 
  - [10 6 15 3 8 20]

            10
      6           15
    3   8            20   

  (1)
  queue   [10]
  visited []


            10
      6           15
    3   8            20   
  
  (2)
  - Có gì trong queue ko
    + có:
      > dequeue
      > bỏ vào visit  
      > kiểm tra xem bên trái thằng đó có node hay ko:
        + nếu có thì add vào queue
      > kiểm tra bên phải có node hay ko: 
        + nếu có thì add vào queue

  queue   [6, 15]
  visited [10]    

  (3)
  - dequeue 6 + bỏ vào visited 
  - check left và right của 6 

  queue   [15, 3, 8]
  visited [10, 6]   

  (4)
  queue   [3, 8, 20]
  visited [10, 6, 15]    

  (5)
  queue   [8, 20]
  visited [10, 6, 15, 3]    

  (6)
  queue   [20]
  visited [10, 6, 15, 3, 8]    

  (7) done
  queue   []
  visited [10, 6, 15, 3, 8, 20]    

*/

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// (1)
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

  // (2) check mô tả ở trên
  BFS() {
    // (a) instantiate
    const queue = new Queue()

    // (b) đây là array trả về
    let visited = []

    // (c) nếu tree empty
    if (!this.root) return []

    // (d) bỏ root vào queue
    queue.push(this.root)

    // (e)
    while (!queue.isEmpty()) {
      // (i) dequeue và bỏ vào visited
      const dequeue = queue.dequeue()
      visited.push(dequeue)

      // (ii) nếu bên trái / phải có thì bỏ vào queue
      if (dequeue.left) queue.push(dequeue.left)
      if (dequeue.right) queue.push(dequeue.right)
    }

    // (f)
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
    10          50
  5   15
*/

console.log(tree.BFS()) // [30 10 50 5 15]

tree.insert(17)
tree.insert(39)
tree.insert(45)
/*
            30
    10              50
  5   15        39
        17        45
*/

console.log(tree.BFS()) // [30 10 50 5 15 39 17 45]
