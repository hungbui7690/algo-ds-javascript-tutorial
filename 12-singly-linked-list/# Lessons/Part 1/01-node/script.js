/*
  Intro
  - https://visualgo.net/en/list
  - no indices
  - random access is not allowed => must traverse

  - Node Visualization

      data:"hi"
      next    ->  "there"
                  next  ->  "how"
                            next  ->  "are"
                                      next  ->  "you"
                                                next -> null

*/

class Node {
  constructor(val) {
    this.data = val
    this.next = null
  }
}

// this is just the node -> next lesson, we still need to define LL class
const first = new Node('hi')
first.next = new Node('there') // create new node & link to next
first.next.next = new Node('how')
first.next.next.next = new Node('are')
first.next.next.next.next = new Node('you')

console.log(first)
console.log(first.next)
console.log(first.next.next)
console.log(first.next.next.next)
console.log(first.next.next.next.next)
