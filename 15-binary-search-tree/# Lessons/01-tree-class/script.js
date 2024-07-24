/*
  Usage
  - pic
  - nested -> DOM, JSON
  - Folder Structures
  - AI 

  Binary Search Tree Intro
  - pic

*/

class Node {
  constructor(value) {
    this.data = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
}

const tree = new BinarySearchTree()
tree.root = new Node(10)
tree.root.right = new Node(15)
tree.root.left = new Node(8)
tree.root.left.right = new Node(9) // doesn't have method => need to use this case

console.log(tree)
