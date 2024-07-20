/*
  Insertion Sort
  - Build up the sort by gradually creating a larger left half which is always sorted

      [(5)  3  4 1 2]     
      - ignore the first item


      [5 (3) 4 1 2]     
      - start with 2nd item, compare to previous one: 
        + 3 < 5 
        => move 3 to the left of 5 => [(3) 5 4 1 2]     


      [3 5 (4) 1 2]   
      - compare (4) with the previous items
        + 4 < 5: (4) must be on the left side of 5
        + 4 > 3: (4) must be on the right side of 3
        => move 4 to the middle of 3 & 5 =>  [3 (4) 5 1 2]   


      [3 4 5 (1) 2]
      - 1 < 5: (1) must be on the left side of 5
      - 1 < 4: (1) must be on the left side of 4
      - 1 < 3: (1) must be on the left side of 3
      => move 1 to the left of 3 =>  [(1) 3 4 5 2]


      [1 3 4 5 (2)]
      - 2 < 5: (2) must be on the left side of 5
      - 2 < 4: (2) must be on the left side of 4
      - 2 < 3: (2) must be on the left side of 3
      - 2 > 1: (2) must be on the right side of 1
      => Move 2 to the middle of 1 & 3 => [1 (2) 3 4 5]

*/

'use strict'

console.log([5, 3, 4, 1, 2])

const insertionSort = (arr) => {
  // start from 2nd item
  for (let i = 1; i < arr.length; i++) {
    // compare with the left side of the target item
    for (let j = i - 1; j >= 0; j--) {
      console.log('i =', i, 'j =', j)
    }
    console.log('******************')
  }
  return arr
}

console.log(insertionSort([5, 3, 4, 1, 2]))
