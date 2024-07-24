/*
  Extract Max
  - pic
  - also known as "remove root", "bubble down", "sink down", "sift down", "heapify down", "cascade down"


  **********************
  Remove the root of this max heap: [(41) 39 33 18 27 12]
            (41)          
        39       33
      18  27   12


  ++++++++++++++
  - Swap root with last (smallest) element: [<12> 39 33 18 27 (41)]
            <12>          
        39         33
      18  27   (41)


  ++++++++++++++
  - Pop root => max => 41 => [<12> 39 33 18 27]
            <12>
        39       33
      18 27   


  ++++++++++++++
  LOOP
  - Children: 39 < 33
  - Swap 12 with 39 
  => [39 12 33 18 27]
            39
        <12>    33
      18   27   


  ++++++++++++++
  - Children: 27 > 18
  - Swap: 12 with 27
  => [39 27 33 18 12]
            39
        27      33
      18 <12>  

  - 12 doesn't have any child that is larger than 12 => STOP


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

  extractMax() {
    function swap(arr, idxA, idxB) {
      ;[arr[idxA], arr[idxB]] = [arr[idxB], arr[idxA]]
    }

    // find left child index
    const findLeftChildIndex = (index) => {
      return index * 2 + 1 < this.items.length ? index * 2 + 1 : undefined
    }

    // compare 2 children => use the larger one
    const findLargerChildIndex = (leftChildIndex, rightChildIndex) => {
      // either one is undefined
      if (!this.items[leftChildIndex] && this.items[rightChildIndex])
        return rightChildIndex
      if (this.items[leftChildIndex] && !this.items[rightChildIndex])
        return leftChildIndex

      return this.items[leftChildIndex] > this.items[rightChildIndex]
        ? leftChildIndex
        : rightChildIndex
    }

    if (this.items.length === 1) return this.items.pop()
    if (this.items.length === 0) return undefined

    // first, swap root with last item in the array
    swap(this.items, 0, this.items.length - 1)

    // second, after swap, remove the root
    const max = this.items.pop()

    let adjIndex = 0
    let leftChildIndex = findLeftChildIndex(0)
    let rightChildIndex = leftChildIndex + 1

    // loop if the new root is greater than the 2 children
    while (
      this.items[adjIndex] <
      this.items[findLargerChildIndex(leftChildIndex, rightChildIndex)]
    ) {
      // must save this, otherwise after swap, function will go wrong
      let largerIdx = findLargerChildIndex(leftChildIndex, rightChildIndex)

      // do the swap
      swap(
        this.items,
        adjIndex,
        findLargerChildIndex(leftChildIndex, rightChildIndex)
      )

      // reset the index
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

// *********************
// make sure it will extract from large item to small item
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
