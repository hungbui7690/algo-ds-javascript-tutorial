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

console.log([2, 1, 9, 76, 4])

/////////////////////////////////////////////////////////
/*
  [1,2,9,76,0]   currentVal = arr[i] = 0
  [1,2,9,76,76]  chúng ta sẽ ko swap, mà sẽ set luôn
  [1,2,9,76,76]
  [1,2,9,9,76]
  [1,2,2,9,76]
  [1,1,2,9,76]
  [0,1,2,9,76]

  > sửa condition lại thành: 
      j >= 0 && arr[j] > currentVal 
    cho trường hợp dưới đây: 

  [1,2,9,76,20]  currentVal = 20 
  [1,2,9,76,76]
  [1,2,9,20,76]  > sẽ stop ngay đây


  ////////////////////////////////////

  Best: data mostly sorted >> ko cần phải làm gì nhiều cả, do condition đã cover hết
  Worst: [9,8,7,6] >> thứ tự bị reverse >> phải làm từ đầu tới cuối

  Thằng này work ok trong trường hợp streaming, khi data nhảy vào liên tục, lúc này chỉ cần insert vào là xong

*/

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i] // (***)

    // (***) xem ở comment để hiểu nguyên vòng for chỗ này
    for (let j = i - 1; j >= 0 && arr[j] > arr[j]; j--) {
      arr[j + 1] = arr[j]
      console.log(arr)
      arr[j] = currentVal
      console.log('^^^^^^^^^^^^^^^')
    }

    console.log(arr)
    console.log('**************************')
  }
  return arr
}

console.log(insertionSort([2, 1, 9, 76, 4]))
