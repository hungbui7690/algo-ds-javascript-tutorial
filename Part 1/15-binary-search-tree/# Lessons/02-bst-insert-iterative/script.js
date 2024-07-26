/*
  Insert 
  - can use interactive or recursive
  - steps: 
    + create node
    + check if it is root or not
      > if not has root -> it is root
      > if has root -> check if that element is greater or less than root
        * greater -> right
        * small -> left
        * check if right/left has node or not 
          - not: create new node 
          - has: continue move to left or right

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

  insert(value) {
    // create new node
    const newNode = new Node(value)

    // not has root
    if (!this.root) {
      this.root = newNode
      return this
    }

    // has root
    let current = this.root

    while (true) {
      // left
      if (value < current.value) {
        // has node on the left
        if (current.left) current = current.left
        else {
          // not has node on the left
          current.left = newNode
          return this
        }
        // already exist
      } else if (current.value === value) {
        return this
        // right
      } else {
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

tree.insert(30)
tree.insert(10)
tree.insert(15)
tree.insert(10) // try to insert the same value
tree.insert(5)
tree.insert(50)

/*
          30
    10          50
  5   15
*/

console.log(tree)
