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

console.log([8, 81, 14, 3, 23, 99])

/////////////////////////////////////////////////////////
/*
  
*/

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i

    for (let j = i + 1; j < arr.length; j++) {
      // (***)
      if (arr[lowest] > arr[j]) lowest = j
    }

    // (***)
    swap(arr, lowest, i)

    console.log(arr)
    console.log('****************************')
  }
  return arr
}

console.log(selectionSort([8, 81, 14, 3, 23, 99]))
