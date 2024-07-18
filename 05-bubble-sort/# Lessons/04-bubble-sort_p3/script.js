/*
  Visu Algo
  > https://visualgo.net/en/sorting
  > Hiểu từng bước khi sort

//////////////////////////////////////////////////////////////////  

  Bubble Sort
  - ko thường đc sử dụng vì ko hiệu quả 
  - chỉ excel trong 1 trường hợp 

//////////////////////////////////////////////////////////////////  

  Cách làm: số lớn sẽ bị bubble up >> compare với thằng kế tiếp, nếu lớn hơn thì swap

    [29]  10    14    30   37   14   18      29 > 10: swap
    10    [29]  14    30   37   14   18      29 > 14: swap
    10    14   [29]   30   37   14   18      29 < 30: KO SWAP
    10    14    29   [30]  37   14   18      30 < 37: KO SWAP
    10    14    29    30  [37]  14   18      37 > 14: swap
    10    14    29    30   14  [37]  18      37 > 18: swap
    10    14    29    30   14   18  [37]     

  - xong 1 vòng > lúc này value lớn nhất đã bị bubble to the top

    [10]  14   29   30   14   18   37   
    10   [14]  29   30   14   18   37   
    10    14  [29]  30   14   18   37   
    10    14   29  [30]  14   18   37   
    10    14   29   14  [30]  18   37   
    10    14   29   14   18  [30]  37    

  - số lớn thứ 2 bị bubble up

  ....
  - làm tương tự tới hết


  */
'use strict'

/////////////////////////////////////////////////////////
// ES2015
const swap = (arr, idx1, idx2) => {
  return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])
}

/////////////////////////////////////////////////////////
/*
  Với phiên bản mới: 
  - Best Case: Nếu array almost sorted: O(2n) = O(n)
  - Worst Case: O(n^2)
*/

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // (a) thêm noSwaps
    let noSwap = true

    for (let j = 0; j < arr.length - i - 1; j++) {
      noSwap = true // (b)
      console.log(arr, arr[j], arr[j + 1])
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        noSwap = false // (c)
      }
    }
    console.log('================================')
    if (noSwap) break // (d) thử comment dòng này và so sánh với trước đó
  }
  return arr
}

// array này đã gần như sort xong
console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]))
