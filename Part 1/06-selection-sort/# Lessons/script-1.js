/*
  Selection Sort 
  - How:  opposite to bubble sort > store the smallest on at the beginning
  
  - Round 1: 
    + Step 1: Find the minimum one 

        [5]  3   4   1   2     5 > 3 -> min = 3
        5   [3]  4   1   2     3 < 4 -> min = 3
        5    3  [4]  1   2     4 > 1 -> min = 1
        5    3   4  [1]  2     1 < 2 -> min = 1
      
    + Step 2: Swap 1st element with min
        [1]  3  4  [5]  2 


  - Round 2: 
    + Find minimum value
        1  [3]  4   5   2      3 < 4 -> min = 3
        1   3  [4]  5   2      4 < 5 -> min = 3
        1   3   4  [5]  2      5 > 2 -> min = 2
    + Swap
        1  [2]  4   5  [3]     5 > 2 -> min = 2
    ...
    ...


  @ Outer Loop: i = 0
  @ Inner Loop: j = i +1


  @@ Note:  Everytime we working with double loops, we should:
    - Log out i & j
    - Log out arr[i] & arr[j]

*/

'use strict'

const swap = (arr, idx1, idx2) => {
  return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])
}

console.log([5, 3, 4, 1, 2])

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i

    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i], arr[j], arr[min], arr[min] > arr[j])
    }

    console.log(arr)
    console.log('++++++++++++')
  }
  return arr
}

console.log(selectionSort([5, 3, 4, 1, 2]))
