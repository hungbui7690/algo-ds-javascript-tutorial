'use strict'
/*

//////////////////////////////////////////////////////

  FIND
  - giống search, contains
  - return true/false

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

  // (***)
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
}

const tree = new BinarySearchTree()

tree.insert(30)
tree.insert(10)
tree.insert(15)
tree.insert(10)
tree.insert(50)
/*
          30
    10          50
  5   15
*/

console.log(tree.find(30)) // true
console.log(tree.find(40)) // false
console.log(tree.find(15)) // true
console.log(tree.find(10)) // true
console.log(tree.find(4)) // false
