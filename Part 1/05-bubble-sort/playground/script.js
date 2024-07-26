/*
  Bubble Sort
  - we add noSwap variable 

  - In this version:
    + Best Case: if array is almost sorted: O(2n) = O(n)
    + Worst Case: O(n^2)

  */

'use strict'

const swap = (arr, idx1, idx2) => {
  return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])
}

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let noSwap = true

    for (let j = 0; j < arr.length - i - 1; j++) {
      noSwap = true

      console.log(arr, arr[j], arr[j + 1])

      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        noSwap = false
      }
    }
    console.log('+++++++++++++')
    if (noSwap) break // *** try to comment this line to compare with previous version
  }
  return arr
}

// this array is almost sorted
console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]))
