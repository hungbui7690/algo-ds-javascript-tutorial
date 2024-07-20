/*
  Insertion Sort

  - This Lesson: Swap without stop
      for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j >= 0; j--) {}}
      
          [5 (3) 4 1 2]
          - data:
            + curVal = arr[i] = arr[j+1] = (3)
            + arr[j] = 5
            + arr[j-1] = undefined
          - swap: 
            + arr[j+1] = arr[j] = 5
            + arr[j] = curVal = (3)
            => [(3) 5 4 1 2]

          
          [3 5 (4) 1 2]
          => [ 3 (4) 5  1 2] 
          => [(4) 3  5  1 2]


          [4 3 5 (1)  2]
          => [ 4   3 (1) 5 2]
          => [ 4  (1) 3  5 2]
          => [(1)  4  3  5 2]


          [1 4 3 5 (2)]
          => [ 1  4  3 (2) 5]
          => [ 1  4 (2) 3  5]
          => [ 1 (2) 4  3  5]
          => [(2) 1  4  3  5]

*/

'use strict'

const swap = (arr, idx1, idx2) => {
  return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])
}

console.log([5, 3, 4, 1, 2])

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i]

    for (let j = i - 1; j >= 0; j--) {
      console.log({
        'arr[i]': arr[i],
        'arr[j-1]': arr[j - 1],
        'arr[j]': arr[j],
        'arr[j+1]': arr[j + 1],
      })

      arr[j + 1] = arr[j]
      arr[j] = currentVal

      console.log(arr)
      console.log('+++++++++++++')
    }
    console.log('*****************')
  }
  return arr
}

console.log(insertionSort([5, 3, 4, 1, 2]))
