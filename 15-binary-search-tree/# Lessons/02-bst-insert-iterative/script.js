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

  // (***) sử dụng while loop
  insert(value) {
    // (1)
    const newNode = new Node(value)

    // (2)
    if (!this.root) {
      this.root = newNode
      return this
    }

    // (3)
    let current = this.root

    // (4)
    while (true) {
      // (a)
      if (value < current.value) {
        if (current.left) current = current.left
        else {
          current.left = newNode
          return this
        }
      }
      // (b)
      else if (current.value === value) {
        return this
      }

      // (c)
      else {
        if (current.right) current = current.right
        else {
          current.right = newNode
          return this
        }
      }
    }
  }
}

const tree = new BinarySearchTree()

// (***)
tree.insert(30)
tree.insert(10)
tree.insert(15)
tree.insert(10) // thử insert trùng xem sao
tree.insert(50)

/*
          30
    10          50
  5   15
*/

console.log(tree)
