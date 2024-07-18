'use strict'
/*
  QUICK SORT
  - cũng giống merge sort, split ra thành array nhỏ hơn 
  - Chọn 1 element bất kỳ trong array (gọi là pivot)
    > sau đó để hết những thằng nhỏ hơn "pivot" nằm bên trái
    > và lớn hơn thì nằm bên phải

  >> CHECK PIC: intro + visualgo + pivot-helper

*/

///////////////////////////////////////////////////////////
// Làm thử pivotHelper funtion

const swap = (arr, idxA, idxB) => {
  ;[arr[idxA], arr[idxB]] = [arr[idxB], arr[idxA]]
}

console.log([65, 13, 86, 23, 14, 9, 99, 8, 16])

///////////////////////////////////////////////////////////

const pivotHelper = (arr, start = 0, end = arr.length) => {
  // (a)
  let pivot = arr[start]
  let idxA = start + 1
  let i = start + 1
  let count = 0

  // (b)
  while (i <= end) {
    // (i)
    if (pivot > arr[i]) {
      console.log('************************************')
      console.log(pivot, arr[i])

      // (***)
      swap(arr, idxA, i)
      console.log(arr)

      // (***)
      idxA++
      count++
    }

    // (ii)
    i++
  }

  // (c) swap pivot tới đúng vị trí của nó
  swap(arr, start, count)

  // (d)
  return { arr, count }
}

console.log(pivotHelper([65, 13, 86, 23, 14, 9, 99, 8, 16])) // 6

// console.log(pivotHelper([9, 16, 34, 7, 4, 1, 18, 10])) // 3
