/*
  Insert 
  - logic:
    + insert to the end of array
    + use the formulas to find parent's index
    + compare with parent:
      > if greater than parent => swap
    + continue until find the correct position

  - Formula: 
      + Left Child: 2n + 1 
      + Right Child: 2n + 2 
      + Parent: (n - 1) / 2

*******************
  Push 55:

    [41 39 33 18 27 12]       55
      0  1  2  3  4  5 

            41
        39      33
      18  27  12

  ++++++++
  Step 1: find the index of new element => index = 6
    [41 39 33 18 27 12  (55)]
      0  1  2  3  4  5    6

  ++++++++
  Step 2: find parent index
  - index = 6 => Parent Index = (n - 1) / 2 = 5/2 = 2.5 = 2
    => the parent of 55 is 33 

    [41 39 <33> 18 27 12 (55)]
      0  1  2   3   4  5   6

  ++++++++
  Step 3: compare & swap
    [<41> 39 (55) 18 27 12 33]
      0    1   2   3  4  5  6

  ++++++++
  Step 4: find parent again => compare & swap
  - index = 2 => parent = (2-1)/2 = 0.5 = 0
    [(55) 39 41 18 27 12 33]
      0    1  2  3  4  5  6

            55
        39      40
      18  27  12  33


*******************
  - Insert these items: 1, 5, 2, 4, 3
  - Then go to visualgo to check to see it's correct or not: https://visualgo.net/en/heap

            5
        4      2    
      1  (3)

  - We can see that 3 is under 4 and 2 => it's ok, as long as it under 4 is ok

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
}

/*
  [41,39,33,18,27,12,55]
   0  1  2  3  4  5  6
*/

const maxHeap = new MaxBinaryHeap()

// ****************
// maxHeap.insert(41)
// maxHeap.insert(39)
// maxHeap.insert(33)
// maxHeap.insert(18)
// maxHeap.insert(27)
// maxHeap.insert(12)
// maxHeap.insert(55)
// console.log(maxHeap.items)

// ****************
// maxHeap.insert(1)
// maxHeap.insert(45)
// maxHeap.insert(99)
// console.log(maxHeap.items)

/*
  ****************
  - Insert these items: 1, 5, 2, 4, 3
  - Then go to visualgo to check to see it's correct or not: https://visualgo.net/en/heap

            5
        4      2    
      1   [3]

  - We can see that 3 is under 4 and 2 => it's ok, as long as it under 4 is ok
*/
maxHeap.insert(1)
maxHeap.insert(5)
maxHeap.insert(2)
maxHeap.insert(4)
maxHeap.insert(3)
console.log(maxHeap.items)
