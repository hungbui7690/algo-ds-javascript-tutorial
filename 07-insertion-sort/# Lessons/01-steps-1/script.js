/*
  Visu Algo
  > https://visualgo.net/en/sorting

//////////////////////////////////////////////////////////////////  

  Insertion Sort
  - PIC

//////////////////////////////////////////////////////////////////  

  */
'use strict'

/////////////////////////////////////////////////////////
// ES2015
const swap = (arr, idx1, idx2) => {
  return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])
}

console.log([0, 2, 8, 81, 14, 3, 23, 99])

/////////////////////////////////////////////////////////
/*
  - xem picture để hiểu rõ insertion sort >> có thể thấy ko swap liên tục, mà tìm đúng điểm rồi mới swap
  - tạo double loops và log i, j ra để xem 
*/

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      console.log(i, j)
    }
    console.log('**************************')
  }
  return arr
}

console.log(insertionSort([0, 2, 8, 81, 14, 3, 23, 99]))
