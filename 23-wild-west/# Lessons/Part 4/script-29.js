/*
  Binary Search Tree - DFS Exercise
  - Implement the following functions on the BinarySearchTree.prototype. insert has been implemented for you to help with testing.

      DFSPreOrder

  - This function should search through each node in the binary search tree using pre-order depth first search and return an array containing each node's value.

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
    if (this.root === null) {
      this.root = new Node(value)
      return this
    } else {
      var current = this.root
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = new Node(value)
            return this
          } else {
            current = current.left
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = new Node(value)
            return this
          } else {
            current = current.right
          }
        }
      }
    }
  }
  DFSPreOrder() {}
  DFSInOrder() {}
  DFSPostOrder() {}
}

var binarySearchTree = new BinarySearchTree()
binarySearchTree
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50)
binarySearchTree.DFSPostOrder() // [5, 1, 12, 10, 50, 20, 15]
