/*
  Visu Algo
  > https://visualgo.net/en/sorting
  > Hiểu từng bước khi sort

//////////////////////////////////////////////////////////////////  

  Selection Sort
  - store số nhỏ ở đầu 
  - Check PIC để hiểu 

//////////////////////////////////////////////////////////////////  

  */
'use strict'

/////////////////////////////////////////////////////////
// ES2015
const swap = (arr, idx1, idx2) => {
  return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])
}

/////////////////////////////////////////////////////////
/*
Lúc nào làm double loop cũng phải: 
- log ra i và j 
- log ra arr[i], arr[j] để xem data
*/

// (1)
console.log([8, 1, 2, 3, 4, 5, 6, 7])

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i

    for (let j = i + 1; j < arr.length; j++) {
      // (2) nếu log đc càng chi tiết càng tốt
      console.log(arr[i], arr[j], arr[lowest], arr[lowest] > arr[j])
    }

    // (3)
    console.log(arr)
    console.log('================================')
  }
  return arr
}

console.log(selectionSort([8, 1, 2, 3, 4, 5, 6, 7]))
