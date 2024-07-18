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

console.log([0, 2, 8, 81, 14, 3, 23, 99])

/////////////////////////////////////////////////////////
/*
  - thêm 0, 2 >> có thể thấy 2 vòng lặp đầu tiên chúng ta ko làm gì cả, nhưng vẫn swap >> thêm if condition
  - chúng ta có thể thấy thằng selection sort thì slightly better hơn là bubble sort (vì đỡ swap hơn)

  Worst: O(n^2)
*/

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) lowest = j
    }

    // (***) thêm chỗ này thì chỉ chạy swap trong trường hợp có thay đổi
    console.log(i, lowest) // nếu ko có condition thì lần nào cũng chạy
    if (i !== lowest) swap(arr, lowest, i)

    console.log(arr)
    console.log('****************************')
  }
  return arr
}

console.log(selectionSort([0, 2, 8, 81, 14, 3, 23, 99]))
