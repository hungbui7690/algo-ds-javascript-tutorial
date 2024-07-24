'use strict'
/*
  Priority Queue - Min Heap
  - now, we change to min heap (the smallest will be the root)
  - later, we can have one more condition when we have 2 tasks with same priorities
    + add this.time = Date.now() in the class Node
    + if the priorities are same, we can compare the Date Time


  ******************
  BIG O
  - Insertion:    O(logN)
  - Removal:      O(logN)
  - Search:       O(N)

  => Insert & Removal with Binary Heap is ok, but when searching is O(N) 
  => There's no way to change, this is the disadvantage of Heap

  ******************
  Why LogN
  - Suppose we have this array: [100 19 36 17 12 25 5 9 15 6 11 13 8 1 4]
  - We want to insert 200
  -> We have 16 elements => 4 comparisons

  ******************
  Worst Case: 
  - Remember thisDepressing Tree
        3
          17
            19
              32
                34
                  63
                    86
                      91

  - Heap doesn't care about this situation 
    => Worst Case still O(LogN)

*/

class Node {
  constructor(value, priority) {
    this.data = value
    this.priority = priority
    // this.date = Date.now()
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
    if (parentIndex < 0) return

    while (this.items[index]?.priority < this.items[parentIndex]?.priority) {
      swap(this.items, index, parentIndex)
      index = parentIndex
      parentIndex = findParentIndex(index)
    }
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority)
    this.items.push(newNode)
    this.bubbleUp()

    return this
  }

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

      return this.items[leftChildIndex].priority <
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
      this.items[adjIndex].priority >
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
