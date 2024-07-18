'use strict'
/*

//////////////////////////////////////////////////////

  INSERT
  - logic: 
    + insert vào cuối array
    + dùng công thức find parent
    + compare với parent
      - nếu lớn hơn parent thì swap 
    + tiếp tục làm như vậy tới đúng vị trí


   [41,39,33,18,27,12]
    0  1  2  3  4  5 

  (1) push 55 vào 
   [41,39,33,18,27,12, 55]
    0  1  2  3  4  5   [6]

  (2) index = 6 >> parent index = 2
   [41,39, 33,18,27,12, 55]
    0  1  [2]  3  4  5  [6]

  (3) so sánh và swap
   [41,39, 55,18,27,12, 33]
    0  1  [2]  3  4  5  6

  (4) find parent, so sánh vào swap
   [55,39, 41,18,27,12,33]
   [0] 1   2  3  4  5  6

  Test: theo thứ tự 1, 5, 2, 4, 3
  
*/

class MaxBinaryHeap {
  constructor(value) {
    this.items = []
  }

  // (1)
  bubbleUp() {
    // (a)
    function swap(arr, idxA, idxB) {
      ;[arr[idxA], arr[idxB]] = [arr[idxB], arr[idxA]]
    }

    // (b)
    function findParentIndex(index) {
      return Math.floor((index - 1) / 2)
    }

    // (c)
    let index = this.items.length - 1
    let parentIndex = findParentIndex(index)

    // (d)
    if (parentIndex < 0) return

    // (e)
    while (this.items[index] > this.items[parentIndex]) {
      swap(this.items, index, parentIndex)
      index = parentIndex
      parentIndex = findParentIndex(index)
    }
  }

  // (2)
  insert(value) {
    this.items.push(value)
    this.bubbleUp()

    return this
  }
}

/*
  [41,39,33,18,27,12,55]
   0  1  2  3  4  5  6
*/

const maxHeap = new MaxBinaryHeap()
maxHeap.insert(41)
maxHeap.insert(39)
maxHeap.insert(33)
maxHeap.insert(18)
maxHeap.insert(27)
maxHeap.insert(12)
maxHeap.insert(55) // (***)
maxHeap.insert(1)
maxHeap.insert(45)
maxHeap.insert(99)

console.log(maxHeap.items)

/* *** 
  nhớ insert thử theo thứ tự này: 1, 5, 2, 4, 3
  xong lên visualgo check xem giống ko 

            5
        4      2    
      1   [3]

  > có thể thấy thằng 3 nằm dưới thằng 4 và thằng [2] >> ko sao, miễn là nằm dưới thằng 4 là ok
*/
// maxHeap.insert(1)
// maxHeap.insert(5)
// maxHeap.insert(2)
// maxHeap.insert(4)
// maxHeap.insert(3)
// console.log(maxHeap.items)
