/*
  Bubble Sort
  - To fix redundant loop, there are 2 ways:
    1. Change the condition of loop j: 
        + j < arr.length - i - 1

    2. Fix in 2 places: 
        + for(let i = arr.length; i > 0; i--)
        + for(let j = 0; j < i - 1; i++) 

  */

'use strict'

const swap = (arr, idx1, idx2) => {
  return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])
}

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1])
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
    console.log('++++++++++++++++')
  }
  return arr
}

console.log(bubbleSort([99, 33, 53, 26, 16]))
