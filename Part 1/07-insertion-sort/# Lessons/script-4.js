/*
  Insertion Sort
  - Previous Lesson: count = 8
        for (let i = 1; i < arr.length; i++) {
          for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--)

          
  - This Lesson: count = 10
        for (let i = 1; i < arr.length; i++)
          for (let j = i - 1; j >= 0; j--)
            if (arr[j] > currentVal)


  - If we put the condition in the if clause, but not in the condition of the for loop:
    + It will take more iteration
    + We can see from previous lesson, at the end count=8
    + But this lesson, we use if clause, count=10

*/

'use strict'

console.log([5, 3, 4, 1, 2])

const insertionSort = (arr) => {
  let count = 0
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i]

    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > currentVal) {
        arr[j + 1] = arr[j]
        arr[j] = currentVal
      }
      count++
    }
    console.log(arr)
    console.log('*********************')
  }

  console.log(count)
  return arr
}

console.log(insertionSort([5, 3, 4, 1, 2]))
