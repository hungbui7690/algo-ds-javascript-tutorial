/*
  Simple Priority Queue
  - every time we enqueue, we will sort based on priority
  - when dequeue, take out the highest priority
  - when learning, use this => later, when working with project, then use binary heap

*/

class PriorityQueue {
  constructor() {
    this.items = []
  }
  enqueue(value, priority) {
    this.items.push({ value, priority })
    this.sort() // # this is the most important
  }
  dequeue() {
    return this.items.shift()
  }

  // # O(NLogN)
  sort() {
    this.items.sort((a, b) => a.priority - b.priority)
  }
}

const q = new PriorityQueue()
q.enqueue('A', 3)
q.enqueue('B', 20)
q.enqueue('C', 5)
q.enqueue('D', 9)
q.enqueue('E', 31)
q.enqueue('F', 99)
q.enqueue('G', 1.5)

console.log(q) // we can see that all the items are sorted based on the priority
