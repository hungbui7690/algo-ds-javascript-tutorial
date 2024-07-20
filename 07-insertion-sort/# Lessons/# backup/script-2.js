/*
  Insertion Sort
  - Build up the sort by gradually creating a larger left half which is always sorted

*/

'use strict'

console.log([5, 3, 4, 1, 2])

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      console.log('arr[i]', arr[i], 'arr[j]', arr[j], 'arr[j-1]', arr[j - 1])
    }
    console.log('*****************')
  }
  return arr
}

console.log(insertionSort([5, 3, 4, 1, 2]))
