/*
  Selection Sort
  - We can see that the selection sort is slightly better than bubble sort (need to do less swap)

  - Worst: O(n^2)

*/

'use strict'

const swap = (arr, idx1, idx2) => {
  return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])
}

// Add 2 more items: 0, 2
// We can clearly see that in the first 2 loops, we still do the swap to itself
console.log([0, 2, 5, 3, 4, 1, 2])

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i

    for (let j = i + 1; j < arr.length; j++) {
      console.log({
        'arr[i]': arr[i],
        'arr[j]': arr[j],
        min,
        'arr[min]': arr[min],
      })

      if (arr[min] > arr[j]) min = j
    }

    console.log(arr)
    console.log('****************************')
  }
  return arr
}

console.log(selectionSort([0, 2, 5, 3, 4, 1, 2]))
