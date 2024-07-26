/*
  Insertion Sort
  - Previous Lesson
      for (let i = 1; i < arr.length; i++)
        for (let j = i - 1; j >= 0; j--)

          [5 (3) 4 1 2]
          => [(3) 5 4 1 2]

          [3 5 (4) 1 2]
          => [3  (4) 5 1 2]
          => [(4) 3  5 1 2]

          [4 3 5 (1) 2]
          => [ 4  3 (1) 5 2]
          => [ 4 (1) 3  5 2]
          => [(1) 4  3  5 2]

          [1 4 3 5 (2)]
          => [ 1  4  3 (2) 5]
          => [ 1  4 (2) 3  5]
          => [ 1 (2) 4  3  5]
          => [(2) 1  4  3  5]

  - This Lesson: 
      for (let i = 1; i < arr.length; i++)
        for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--)

          [5 (3) 4 1 2]
          - data:
            + curVal = arr[i] = arr[j+1] = (3)
            + arr[j] = 5 > (3) 
          - swap: 
            => [(3) 5 4 1 2]

          [3 5 (4) 1 2]
          - data:
            + curVal = arr[i] = arr[j+1] = (4)
            + arr[j] = 5 > (4)
          - swap: 
            => [3 (4) 5 1 2] 
            => 3 NOT GREATER THAN (4) => NO SWAP


          [3 4 5 (1) 2]
          - data:
            + curVal = arr[i] = arr[j+1] = (1)
            + arr[j] = 5 > (1)
          - swap:
            => [3 4 (1) 5 2] 
            => 4 > (1) => [ 3 (1) 4 5 2] 
            => 3 > (1) => [(1) 3  4 5 2]

          [1 3 4 5 (2)]
          - data:
            + curVal = arr[i] = arr[j+1] = (2)
            + arr[j] = 5 > (2)
          - swap:
            => [1 3 4 (2) 5]
            => 4 > (2) => [1  3 (2) 4 5]
            => 3 > (2) => [1 (2) 3  4 5]
            => 1 NOT GREATER THAN (2) => NO SWAP
        

  +++++++++++++++++++++
  Best Case: data is mostly sorted 
  => we don't need to do anything since condition has covered everything
    
  Worst: [9,8,7,6] 
  > the order is reversed
  > must scan and swap from beginning to the end


  +++++++++++++++++++++
  Insertion Sort works fine in case of "streaming"
  - In streaming, the comes in continuously, now, we just need to insert data to the correct place

*/

'use strict'

console.log([5, 3, 4, 1, 2])

const insertionSort = (arr) => {
  let count = 0
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i]

    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      console.log('arr[i]', arr[i], 'arr[j]', arr[j], 'arr[j-1]', arr[j - 1])

      arr[j + 1] = arr[j]
      arr[j] = currentVal

      console.log(arr)
      count++
      console.log('+++++++++++++')
    }

    console.log(arr)
    console.log('*********************')
  }
  console.log(count)
  return arr
}

console.log(insertionSort([5, 3, 4, 1, 2]))
