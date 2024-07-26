'use strict'
/*
  FIND
  - similar search, contains
  - return true/false

  BIG-O
  - Insertion - O(logn)
  - Search    - O(logn)
  => no guarantee always logn
  => bad case: O(n) => pic

  - some Terminology:
    + Full Binary Tree === Strict Binary Tree: each node has 0 or 2 children

  - BST has some methods:
    + Breadth-first search (BFS): side to side
    + Depth-first search (DFS) 
    + Delete: 3 cases:
      > No child
      > One child: after delete, make sure the parent of the deleted one stick to the child of the deleted one.
      > 2 children: You have to find and replace the node you want to delete with its in-order successor (the leftmost node in the right subtree).

    + Find Predecessor: Predecessors can be described as the node that would come right before the node you are currently at. To find the predecessor of the current node, look at the right-most/largest leaf node in the left subtree.
    + Find Successors: Successors can be described as the node that would come right after the the current node. To find the successor of the current node, look at the left-most/smallest leaf node in the right subtree.

    > https://www.freecodecamp.org/news/binary-search-trees-bst-explained-with-examples/

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
