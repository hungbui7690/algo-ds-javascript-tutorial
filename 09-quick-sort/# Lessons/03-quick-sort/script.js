'use strict'
/*
  QUICK SORT
  - cũng giống merge sort, split ra thành array nhỏ hơn 
  - Chọn 1 element bất kỳ trong array (gọi là pivot)
    > sau đó để hết những thằng nhỏ hơn "pivot" nằm bên trái
    > và lớn hơn thì nằm bên phải

  >> CHECK PIC: intro + visualgo + pivot-helper

/////////////////////////////////////////////////////////////////////////

  [[65]  101  36     23       14      9      99      8      16]      
  [16,   36,  23,    14        9     8]     [65]    [101    99]      
  
                                            [65] 
  [16,   36,  23,    14        9     8]             [101    99]      
                                                    [99]  [101]
  [8    14    9]    [16]     [23    36]

                    [16]
  [8    14    9]             [23    36]

  [8]   [14   9]             [23]  [36]        

  [8]   
        [14    9]
        [9]  [14]

  >> collect array có single item theo thứ tự thì thấy đã sort xong
  [8]   [9]  [14]   [16]     [23]  [36]      [65]    [99]  [101]

/////////////////////////////////////////////////////////////////////////

  (***) Tại sao base case là left < right 

   l           r
  [4,6,9,1,2,5,3]

   l   r
  [3,2,1,[4],6,9,5]

   l r
  [2,1,[3]]

   r
   l
  [1,[2]]

/////////////////////////////////////////////////////////////////////////

  Best, Average: O(nlogn) 
  + giống merge sort: chia đôi >> logn 
  + n comparison 
    > nlogn

  Worst: O(n^2)
    [1,2,3,4,5,6,7,8]
    [1] [2,3,4,5,6,7,8]
        [2], [3,4,5,6,7,8]
    >> ko làm gì cả, ko chia đôi >> O(n)
    >> thêm O(n) comparison ở mỗi vòng >> N^2

    >> để giải quyết, pick pivot random hoặc pick pivot ở giữa (medium/median)

  Space: O(logn)

*/

///////////////////////////////////////////////////////////

const swap = (arr, idxA, idxB) => {
  ;[arr[idxA], arr[idxB]] = [arr[idxB], arr[idxA]]
}

const pivot = (arr, start = 0, end = arr.length + 1) => {
  const pivot = arr[start]
  let swapIndex = start

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++
      swap(arr, swapIndex, i)
    }
  }
  swap(arr, start, swapIndex)

  return swapIndex
}

console.log([65, 101, 36, 23, 14, 9, 99, 8, 16])

///////////////////////////////////////////////////////////

const quickSort = (arr, start = 0, end = arr.length - 1) => {
  // (***) check hình ở trên để xem base case
  if (start < end) {
    let pivotIndex = pivot(arr, start, end) // 6
    quickSort(arr, start, pivotIndex - 1) // thằng pivot đã đúng rồi, nên ko đụng tới nó nữa
    quickSort(arr, pivotIndex + 1, end)
  }
  return arr
}

console.log(quickSort([65, 101, 36, 23, 14, 9, 99, 8, 16]))
