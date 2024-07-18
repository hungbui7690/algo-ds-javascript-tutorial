'use strict'
/*
  QUICK SORT
  - cũng giống merge sort, split ra thành array nhỏ hơn 
  - Chọn 1 element bất kỳ trong array (gọi là pivot)
    > sau đó để hết những thằng nhỏ hơn "pivot" nằm bên trái
    > và lớn hơn thì nằm bên phải

  >> CHECK PIC: intro + visualgo + pivot-helper

/////////////////////////////////////////////////////////
  - luôn lấy số đầu tiên làm pivot >> ở đây là 65
  - swapIndex = si

   p    i
  [65, 101,  36,  23,  14,   9,   99,  8,   16]        65 vs 101 >> ko làm gì cả

   p          i
  [65, 101,  36,  23,  14,   9,   99,  8,   16]        65 vs 36 >> swap 
        si  

   p              i
  [65,  36,  101, 23,  14,   9,   99,  8,   16]        65 vs 23 >> swap
             si

   p                    i
  [65,  36,  23,  101  14,   9,   99,  8,   16]        65 vs 14 >> swap
                  si

   p                         i
  [65,  36,  23,  14   101,  9,   99,  8,   16]        65 vs 9 >> swap
                       si

   p                               i
  [65,  36,  23,  14   9,   101,  99,  8,   16]        65 vs 99 >> KO
                            si

   p                                   i
  [65,  36,  23,  14   9,   101,  99,  8,   16]        65 vs 8 >> swap
                            si

   p                                         i
  [65,  36,  23,  14   9,    8,   99,  101, 16]        65 vs 16 >> swap
                                  si

   p                                              i
  [65,  36,  23,  14   9,    8,   16,  101, 99]        i đã chạy hết
                                  si


  - Lúc này swapIndex = 7
  - swap pivot vị trí swapIndex 
                                                  i
  [16,  36,  23,  14   9,    8,   65, 101, 99]      
                                  si
  > Lúc này 65 đã nằm đúng vị trí của nó trong array


*/

///////////////////////////////////////////////////////////
// PivotHelper của Instructor

const swap = (arr, idxA, idxB) => {
  ;[arr[idxA], arr[idxB]] = [arr[idxB], arr[idxA]]
}

console.log([65, 101, 36, 23, 14, 9, 99, 8, 16])

///////////////////////////////////////////////////////////

// (a) sử dụng length + 1
const pivotHelper = (arr, start = 0, end = arr.length + 1) => {
  const pivot = arr[start]
  let swapIndex = start // giống count của mình

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++
      swap(arr, swapIndex, i)
      console.log(arr) // (***)
    }
  }
  swap(arr, start, swapIndex)

  return swapIndex
}

console.log(pivotHelper([65, 101, 36, 23, 14, 9, 99, 8, 16])) // 5
// console.log(pivotHelper([9, 16, 34, 7, 4, 1, 18, 10])) // 3
