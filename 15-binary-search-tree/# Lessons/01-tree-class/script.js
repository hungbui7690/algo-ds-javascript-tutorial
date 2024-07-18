'use strict'
/*

//////////////////////////////////////////////////////

  INTRO 

  USAGE (pic)
  - nested >> DOM, JSON
  - Folder Structures
  - AI 

  BINARY-INTRO

*/

// (1)
class Node {
  constructor(value) {
    this.data = value
    this.left = null
    this.right = null
  }
}

// (2)
class BinarySearchTree {
  constructor() {
    this.root = null // chỉ cần root, ko có parent hay children gì hết
  }
}

const tree = new BinarySearchTree()
tree.root = new Node(10)
tree.root.right = new Node(15)
tree.root.left = new Node(8)
tree.root.left.right = new Node(9) // chưa có method >> phải dùng cách này

console.log(tree)
