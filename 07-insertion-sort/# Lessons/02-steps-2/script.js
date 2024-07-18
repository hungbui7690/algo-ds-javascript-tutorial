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
  - log ra dựa theo thông tin chúng ta biết về insertion sort
  - chúng ta cần arr[j] và arr[j-1] vì đôi lúc sẽ phải nhét vào giữa
*/

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      // (***)
      console.log(arr[j - 1], arr[j], arr[i])
    }
    console.log('**************************')
  }
  return arr
}

console.log(insertionSort([0, 2, 8, 81, 14, 3, 23, 99]))
