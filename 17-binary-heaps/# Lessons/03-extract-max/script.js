'use strict'
/*

//////////////////////////////////////////////////////

  EXTRACT MAX (REMOVE FROM A HEAP/ REMOVE THE ROOT/ DELETE ROOT)
  - pic

*/

class MaxBinaryHeap {
  constructor(value) {
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

    while (this.items[index] > this.items[parentIndex]) {
      swap(this.items, index, parentIndex)
      index = parentIndex
      parentIndex = findParentIndex(index)
    }
  }
  insert(value) {
    this.items.push(value)
    this.bubbleUp()

    return this
  }

  // (***)
  extractMax() {
    // (a)
    function swap(arr, idxA, idxB) {
      ;[arr[idxA], arr[idxB]] = [arr[idxB], arr[idxA]]
    }

    // (b) tìm index của left child
    const findLeftChildIndex = (index) => {
      return index * 2 + 1 < this.items.length ? index * 2 + 1 : undefined
    }

    // (c) so sánh 2 thằng child, lấy index của thằng lớn hơn
    const findLargerChildIndex = (leftChildIndex, rightChildIndex) => {
      // (***) trường hợp 1 trong 2 thằng bị undefined
      if (!this.items[leftChildIndex] && this.items[rightChildIndex])
        return rightChildIndex
      if (this.items[leftChildIndex] && !this.items[rightChildIndex])
        return leftChildIndex

      return this.items[leftChildIndex] > this.items[rightChildIndex]
        ? leftChildIndex
        : rightChildIndex
    }

    // (***) trường hợp đặc biệt, nếu chỉ có 1 item duy nhất
    if (this.items.length === 1) return this.items.pop()
    if (this.items.length === 0) return undefined

    // (***) đầu tiên vô, chúng ta sẽ swap root với last item
    swap(this.items, 0, this.items.length - 1)

    // (***) sau đó swap thì xoá thằng root (hiện nằm ở cuối)
    const max = this.items.pop()

    // (***)
    let adjIndex = 0
    let leftChildIndex = findLeftChildIndex(0)
    let rightChildIndex = leftChildIndex + 1

    // (***) sẽ loop nếu như thằng root mới lớn hơn 2 thằng child
    while (
      this.items[adjIndex] <
      this.items[findLargerChildIndex(leftChildIndex, rightChildIndex)]
    ) {
      // (i) phải lưu biến này lại, nếu ko thì sau khi swap xong, function này sẽ ra sai
      let largerIdx = findLargerChildIndex(leftChildIndex, rightChildIndex)

      // (ii) thực hiện swap
      swap(
        this.items,
        adjIndex,
        findLargerChildIndex(leftChildIndex, rightChildIndex)
      )

      // (iii) set lại index
      adjIndex = largerIdx
      leftChildIndex = findLeftChildIndex(adjIndex)
      rightChildIndex = leftChildIndex + 1
    }

    return max
  }
}

const maxHeap = new MaxBinaryHeap()
// maxHeap.insert(41)
// maxHeap.insert(39)
// maxHeap.insert(33)
// maxHeap.insert(18)
// maxHeap.insert(27)
// maxHeap.insert(12)
// maxHeap.insert(55)
// console.log(maxHeap.items) // [55, 39, 41, 18, 27, 12, 33]

// console.log(maxHeap.extractMax()) // 55
// console.log(maxHeap.items) // [41, 39, 33, 18, 27, 12]
// console.log(maxHeap.extractMax()) // 41
// console.log(maxHeap.items) // [39, 27, 33, 18, 12]
// console.log(maxHeap.extractMax()) // 39
// console.log(maxHeap.items) // [33, 27, 12, 18]
// console.log(maxHeap.extractMax()) // 33
// console.log(maxHeap.items) // [27, 18, 12]
// console.log(maxHeap.extractMax()) // 27
// console.log(maxHeap.items) // 18, 12
// console.log(maxHeap.extractMax()) // 18
// console.log(maxHeap.items) // [12]
// console.log(maxHeap.extractMax()) // 12
// console.log(maxHeap.items) // []
// console.log(maxHeap.extractMax()) // undefined
// console.log(maxHeap.items) // []
// console.log(maxHeap.extractMax()) // undefined
// console.log(maxHeap.items) // []

////////////////////////////////////////////
// Nhớ test khúc dưới đây: phải chắc chắn khi extract sẽ lấy đc từ lớn tới nhỏ

maxHeap.insert(1)
maxHeap.insert(5)
maxHeap.insert(2)
maxHeap.insert(4)
maxHeap.insert(3)

console.log(maxHeap.extractMax())
console.log(maxHeap.items)
console.log(maxHeap.extractMax())
console.log(maxHeap.items)
console.log(maxHeap.extractMax())
console.log(maxHeap.items)
console.log(maxHeap.extractMax())
console.log(maxHeap.items)
console.log(maxHeap.extractMax())
console.log(maxHeap.items)
console.log(maxHeap.extractMax())
console.log(maxHeap.items)
