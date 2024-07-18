'use strict'
/*

//////////////////////////////////////////////////////

  PRIORITY QUEUE - INTRO
  - check pic (explain rất kỹ)
  - giống emergency room ở hospital >> treat dựa theo priority level
    >> cho dù có đang đợi mà gặp high priority cũng phải nhường
  - đây là 1 abstract concept >> có thể dùng array hoặc LL để implement (nhưng sẽ slow) 

  PRIORITY QUEUE - IMPLEMENT

  PRIORITY QUEUE - PSEUDO

////////////////////////////////////////////////

  Dựa theo hình implement và pseudo để build PriorityQueue class



*/

// (1)
class Node {
  constructor(value, priority) {
    this.data = value
    this.priority = priority
  }
}

class PriorityQueue {
  constructor() {
    this.items = []
  }

  // (2) sửa lại >> compare bằng priority >> các bước ở dưới cũng vậy
  bubbleUp() {
    function swap(arr, idxA, idxB) {
      ;[arr[idxA], arr[idxB]] = [arr[idxB], arr[idxA]]
    }
    function findParentIndex(index) {
      return Math.floor((index - 1) / 2)
    }
    let index = this.items.length - 1
    let parentIndex = findParentIndex(index)

    // (***)
    if (parentIndex < 0) return

    // (***) sử dụng ?.
    while (this.items[index]?.priority > this.items[parentIndex]?.priority) {
      swap(this.items, index, parentIndex)
      index = parentIndex
      parentIndex = findParentIndex(index)
    }
  }

  // (3) đổi thành enqueue
  enqueue(value, priority) {
    // (***)
    const newNode = new Node(value, priority)
    // (***)
    this.items.push(newNode)
    this.bubbleUp()

    return this
  }

  // (4) đổi extractMax() thành dequeue()
  dequeue() {
    function swap(arr, idxA, idxB) {
      ;[arr[idxA], arr[idxB]] = [arr[idxB], arr[idxA]]
    }
    const findLeftChildIndex = (index) => {
      return index * 2 + 1 < this.items.length ? index * 2 + 1 : undefined
    }
    const findLargerChildIndex = (leftChildIndex, rightChildIndex) => {
      if (!this.items[leftChildIndex] && !this.items[rightChildIndex]) return // (***)
      if (!this.items[leftChildIndex] && this.items[rightChildIndex])
        return rightChildIndex
      if (this.items[leftChildIndex] && !this.items[rightChildIndex])
        return leftChildIndex

      // (***)
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

    // (***)
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
