'use strict'
/*

//////////////////////////////////////////////////////

  INSERT
  - có thể sử dụng interative hoặc recursive 
  - steps: 
    + tạo node
    + check xem phải root ko
      > nếu chưa có root thì nó là root
      > nếu có root rồi thì check lớn nhỏ 
        + Nếu lớn hơn thì sang phải 
        + nhỏ hơn sang trái 
          > check có node chưa
            + có thì sang trái hoặc phải 
            + chưa có thì tạo node

  - Insert 33
            10        
        5        13
              12     15


  - có root rồi >> đi bên phải 
  - so sánh với 13 >> đi bên phải 
  - so sanh 15 >> đi bên phải
  - chưa có node >> tạo node

            10        
        5        13
              12     15
                        33
*/

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  // (***) recursion
  insert(node, value) {
    // (a) chưa có root
    if (!this.root) {
      const newNode = new Node(value)
      this.root = newNode
      return this
    }

    // (b) sang trái
    if (value < node.value) {
      if (node.left) {
        this.insert(node.left, value)
      } else {
        const newNode = new Node(value)
        node.left = newNode
        return this
      }
    }
    // (c) đã tồn tại
    else if (value === node.value) return this
    // (d) sang phải
    else {
      if (node.right) {
        this.insert(node.right, value)
      } else {
        const newNode = new Node(value)
        node.right = newNode
        return this
      }
    }
  }
}

const tree = new BinarySearchTree()

// (***)
tree.insert(tree.root, 30)
tree.insert(tree.root, 10)
tree.insert(tree.root, 5)
tree.insert(tree.root, 15)
tree.insert(tree.root, 10) // thử insert trùng xem sao
tree.insert(tree.root, 50)
/*
          30
    10          50
  5   15
*/

console.log(tree)
