/*
  Insert
  - using recursion

  *************
  Insert 33
            10        
        5        13
              12     15

  - has root
  - 33 > 10 -> right
  - 33 > 13 -> right 
  - 33 > 15 -> right 
  - not has node -> create node

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

  insert(node, value) {
    // not has root
    if (!this.root) {
      const newNode = new Node(value)
      this.root = newNode
      return this
    }

    // left
    if (value < node.value) {
      if (node.left) {
        this.insert(node.left, value)
      } else {
        const newNode = new Node(value)
        node.left = newNode
        return this
      }
    }
    // already exist
    else if (value === node.value) return this
    // right
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

tree.insert(tree.root, 30)
tree.insert(tree.root, 10)
tree.insert(tree.root, 5)
tree.insert(tree.root, 15)
tree.insert(tree.root, 10) // try to insert the same value
tree.insert(tree.root, 5)
tree.insert(tree.root, 50)
/*
          30
    10          50
  5   15
*/

console.log(tree)
