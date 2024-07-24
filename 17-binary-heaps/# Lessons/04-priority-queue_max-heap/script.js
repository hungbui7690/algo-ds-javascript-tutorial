'use strict'
/*
  Priority Queue - Intro
  - DS where each element has priority
  - Elements with higher priorities are served before elements with lower priorities
  - This is the abstract concept => can use array or LL to implement (but slow)
  - Naive Version: [priority:3  priority:1  priority:2  priority:5  priority: 4]


  *********************
  Why Priority Queue
  - Assume we are in the hospital
  - We have the the Next Patient binary heap => based on priority level

                Low Fever

  - Now if there is a higher priority case (concussion or Exploded Head) => now, this case will be served first

                Concussion
          Low Fever

                Concussion
          Low Fever     Drunk

                Exploded Head
          Concussion      Drunk
      Low Fever

                Exploded Head
          Concussion        Drunk
      Low Fever   Flu


  *********************
  Extract Max

                Concussion
            Flu          Drunk
        Low Fever

  - If we compare with naive version => naive doesn't have order, so we need to iterate through the whole array to find the one has higher priority 


  *********************
  Our Priority Queue
  - Max Binary Heap: higher number means higher priority
  - Each node has: value & priority => use the priority to build the heap
  - Methods: enqueue & dequeue
  - Value doesn't matter => Heap is constructed using Priority

                                  data:"concussion"
                                  priority: 5 
              data:"high fever"                       data:"broken arm"
              priority: 4                             priority: 2
  data:"glass in foot"  data:"gunshot wound"
  priority: 3           priority: 1
*/

class Node {
  constructor(value, priority) {
    this.data = value
    this.priority = priority // # different than Binary Heap
  }
}

class PriorityQueue {
  constructor() {
    this.items = []
  }

  bubbleUp() {
    function swap(arr, idxA, idxB) {
      ;[arr[idxA], arr[idxB]] = [arr[idxB], arr[idxA]]
    }
    function findParentIndex(index) {
      return Math.floor((index - 1) / 2)
    }
    let index = this.items.length - 1
    let parentIndex = findParentIndex(index)

    if (parentIndex < 0) return // #

    // # use ?.
    while (this.items[index]?.priority > this.items[parentIndex]?.priority) {
      swap(this.items, index, parentIndex)
      index = parentIndex
      parentIndex = findParentIndex(index)
    }
  }

  // change to enqueue
  enqueue(value, priority) {
    const newNode = new Node(value, priority)
    this.items.push(newNode)
    this.bubbleUp()

    return this
  }

  // change from extractMax to dequeue
  dequeue() {
    function swap(arr, idxA, idxB) {
      ;[arr[idxA], arr[idxB]] = [arr[idxB], arr[idxA]]
    }
    const findLeftChildIndex = (index) => {
      return index * 2 + 1 < this.items.length ? index * 2 + 1 : undefined
    }
    const findLargerChildIndex = (leftChildIndex, rightChildIndex) => {
      if (!this.items[leftChildIndex] && !this.items[rightChildIndex]) return
      if (!this.items[leftChildIndex] && this.items[rightChildIndex])
        return rightChildIndex
      if (this.items[leftChildIndex] && !this.items[rightChildIndex])
        return leftChildIndex

      return this.items[leftChildIndex].priority >
        this.items[rightChildIndex].priority
        ? leftChildIndex
        : rightChildIndex
    }
    if (this.items.length === 1) return this.items.pop()
    if (this.items.length === 0) return undefined

    swap(this.items, 0, this.items.length - 1)

    const max = this.items.pop()

    let adjIndex = 0
    let leftChildIndex = findLeftChildIndex(0)
    let rightChildIndex = leftChildIndex + 1

    while (
      this.items[adjIndex].priority <
      this.items[findLargerChildIndex(leftChildIndex, rightChildIndex)]
        ?.priority
    ) {
      let largerIdx = findLargerChildIndex(leftChildIndex, rightChildIndex)
      swap(
        this.items,
        adjIndex,
        findLargerChildIndex(leftChildIndex, rightChildIndex)
      )
      adjIndex = largerIdx
      leftChildIndex = findLeftChildIndex(adjIndex)
      rightChildIndex = leftChildIndex + 1
    }

    return max
  }
}

const ER = new PriorityQueue()
ER.enqueue('common cold', 5)
ER.enqueue('gunshot wound', 1)
ER.enqueue('high fever', 4)
ER.enqueue('broken arm', 2)
ER.enqueue('glass in foot', 3)
console.log(ER)

console.log(ER.dequeue())
console.log(ER.dequeue())
console.log(ER.dequeue())
console.log(ER.dequeue())
console.log(ER.dequeue())
