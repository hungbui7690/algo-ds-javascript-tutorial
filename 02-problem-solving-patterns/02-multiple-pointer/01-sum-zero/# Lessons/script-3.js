/*
  sumZero(sorted_int_array)
  - if pair return 0 > return that pair
  - if pair not return 0 > return undefined
  
    > sumZero([-3,-2,-1,0,1,2,3]) = [-3,3]
    > sumZero([-2,0,1,3]) = undefined
    > sumZero([1,2,3]) = undefined

  - In this method, we use "multiple pointers"
  @@ To make this work, array must be sorted
    > if the sum of both pointers > 0 : then move left pointer to the right
    > if the sum of both pointers < 0 : then move right pointer to the left


  Example 1:
    Pointer 1                 Pointer 2
      \                         /
      [-3, -2, -1, 0, 2, 4, 5, 6] : one pointer at the beginning, another pointer is at the end of array
      -3, 6 > 0 
      -3, 5 > 0 
      -3, 4 > 0
      -3, 2 < 0
      -2, 2 === 0
      > return [-2, 2]


  Example 2:
    Pointer 1      Pointer 2
      \               /
      [-3, -1, 0, 2, 6]
      -3, 6 > 0 
      -3, 2 > 0
      -3, 0 < 0
      -1, 0 < 0
      > return undefined

  Example 3:
    Pointer 1         Pointer 2
      \                  /
      [-3, -2, 2, 3, 5, 6]
      -3, 6 > 0
      -3, 5 > 0
      -3, 3 === 0 
      > return [-3, 3]

  !! We can use this method because we know that this is the SORTED Array

  - O(n) 

*/

const sumZero = (arr) => {
  // 1. create 2 pointers
  let left = 0
  let right = arr.length - 1

  // 2. move pointer
  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) return [arr[left], arr[right]]

    if (sum > 0) right-- // move right pointer to the left
    else left++ // move left pointer to the right
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]))
console.log(sumZero([-3, -2, -1, 0, 2, 4, 5, 6]))
console.log(sumZero([-2, 0, 1, 3]))
