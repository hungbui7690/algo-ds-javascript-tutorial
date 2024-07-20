/*
  Insertion Sort

    [1 2 9 76  0]   currentVal = arr[i] = 0
    [1 2 9 76 76]   we don't swap but set it right away
    [1 2 9 9  76]
    [1 2 2 9  76]
    [1 1 2 9  76]
    [0 1 2 9  76]

    - change the condition to: 
      + j >= 0 && arr[j] > currentVal 
      cho trường hợp dưới đây: 

    [1 2 9 76 20]  currentVal = 20 
    [1 2 9 76 76]
    [1 2 9 20 76]  > sẽ stop ngay đây
  
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
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i]

    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      console.log('arr[i]', arr[i], 'arr[j]', arr[j], 'arr[j-1]', arr[j - 1])

      arr[j + 1] = arr[j]
      console.log(arr)

      arr[j] = currentVal
      console.log('+++++++++++++')
    }

    console.log(arr)
    console.log('*********************')
  }
  return arr
}

console.log(insertionSort([5, 3, 4, 1, 2]))
