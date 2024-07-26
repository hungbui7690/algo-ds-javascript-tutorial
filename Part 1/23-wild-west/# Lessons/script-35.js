/*
  BinaryHeap - extractMax Exercise
  - Implement the following functions on the maxBinaryHeap class

      extractMax

  - Implement the `extractMax` function on the `MaxBinaryHeap.prototype`: This function should remove the root node in a binary heap. Make sure to re-order the heap after removal if necessary.

*/

class MaxBinaryHeap {
  constructor() {
    this.values = []
  }
  insert() {}

  extractMax() {}
}

binaryHeap.insert(1)
binaryHeap.insert(2)
binaryHeap.insert(3)
binaryHeap.insert(4)
binaryHeap.insert(5)
binaryHeap.insert(6)
binaryHeap.extractMax()
binaryHeap.values[0] // 5

binaryHeap.values // [5,4,2,1,3])

binaryHeap.extractMax()
binaryHeap.values // [4,3,2,1])

binaryHeap.extractMax()
binaryHeap.values // [3,1,2])
