/*
  QUICK SORT
  - similar to merge sort, quick sort also splits into smaller array
  - pic

+++++++++++++++
  Pivot Helper: 
  - a function that returns a number 
  - choose a random element in the array as "pivot"
  - typically, we choose the 1st element as pivot
    + the smaller elements will be on the left side of "pivot"
    + and the bigger elements will be on the right
  
  
  - swapIndex = si = | |

  [|65| (101) 36 23 14 9 99 8 16]        
  - pivot = 65, i = 1
  - 65 < (101) => NO SWAP


  [|65| 101 (36) 23 14 9 99 8 16]        
  - i = 2
  - 65 > (36) => si++ = 1 
    => [65 |101| (36) 23 14 9 99 8 16]  
  - swap(i, si) 
    => [65 |36| (101) 23 14 9 99 8 16]  


  [65 |36| 101 (23) 14 9 99 8 16]        
  - i = 3
  - 65 > (23) => si++ = 2 
    => [65 36 |101| (23) 14 9 99 8 16]  
  - swap(i, si) 
    => [65 36 |23| (101) 14 9 99 8 16]   


  [65 36 |23| 101 (14) 9 99 8 16]        
  - i = 4
  - 65 > (14) => si++ = 3
    => [65 36 23 |101| (14) 9 99 8 16]    
  - swap(i, si) 
    => [65 36 23 |14| (101) 9 99 8 16]        


  [65 36 23 |14| 101 (9) 99 8 16] 
  - i = 5
  - 65 > (9) => si++ = 4
    => [65 36 23 14 |101| (9) 99 8 16] 
  - swap(i, si) 
    => [65 36 23 14 |9| (101) 99 8 16] 


  [65 36 23 14 |9| 101 (99) 8 16] 
  - i = 6
  - 65 < (99) => NO SWAP


  [65 36 23 14 |9| 101 99 (8) 16] 
  - i = 7
  - 65 < (8) => si++ = 5
    => [65 36 23 14 9 |101| 99 (8) 16]        
  - swap(i, si) 
    => [65 36 23 14 9 |8| 99 (101) 16]        


  [65 36 23 14 9 |8| 99 101 (16)]        
  - i = 8
  - 65 < (16) => si++ = 6
    => [65 36 23 14 9 8 |99| 101 (16)] 
  - swap(i, si) 
    => [65 36 23 14 9 8 |16| 101 (99)]

  
  - we found swapIndex = 6
  - swap pivot to swapIndex 
    => [16 36 23 14 9 8 |65| 101 99]      

  => at this moment, 65 is placed at it correct position in the array => 65 is sorted

*/

console.log([65, 13, 86, 23, 14, 9, 99, 8, 16])

const pivotHelper = (arr, start = 0, end = arr.length) => {
  let pivot = arr[start]
  let idxA = start + 1
  let i = start + 1
  let swapIdx = 0

  while (i <= end) {
    if (pivot > arr[i]) {
      console.log('*********************')
      console.log(pivot, arr[i])

      swap(arr, idxA, i)
      console.log(arr)

      idxA++
      swapIdx++
    }
    i++
  }

  // swap pivot to the correct position
  swap(arr, start, swapIdx)

  return { arr, swapIdx }
}

console.log(pivotHelper([65, 13, 86, 23, 14, 9, 99, 8, 16])) // 6

// console.log(pivotHelper([9, 16, 34, 7, 4, 1, 18, 10])) // 3

function swap(arr, idxA, idxB) {
  ;[arr[idxA], arr[idxB]] = [arr[idxB], arr[idxA]]
}
