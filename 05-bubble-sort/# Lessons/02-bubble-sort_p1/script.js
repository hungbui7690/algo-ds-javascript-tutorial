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
// đây là cách chưa tối ưu >> O(N^2)
// sau khi log ra sẽ thấy undefined >> bị dư và, ở vòng thứ 2 thì ko cần compare thằng cuối nữa, do nó là lớn nhất rồi >> PIC

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr, arr[j], arr[j + 1])
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
    console.log('================================')
  }
  return arr
}

console.log(bubbleSort([99, 33, 53, 26, 16]))
