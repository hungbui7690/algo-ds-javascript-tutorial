/*
  Visu-Algo
  - https://visualgo.net/en/sorting
    > understand sort step

++++++++++++++++++

  Bubble Sort
  - rarely used because not efficient
  - excel in some cases

++++++++++++++++++

  How: compare a number with the next one > big number will be bubbled up  

  Example: sort this array [29 10 14 30 37 14 18]

  - 1st Round

      [29]  10    14    30   37   14   18      29 > 10: swap
      10    [29]  14    30   37   14   18      29 > 14: swap
      10    14   [29]   30   37   14   18      29 < 30: NO SWAP
      10    14    29   [30]  37   14   18      30 < 37: NO SWAP
      10    14    29    30  [37]  14   18      37 > 14: swap
      10    14    29    30   14  [37]  18      37 > 18: swap
      10    14    29    30   14   18  [37]  

  - 2nd Round: now, the largest value is bubbled up to the top
    
      [10]  14   29   30   14   18   37   
      10   [14]  29   30   14   18   37   
      10    14  [29]  30   14   18   37   
      10    14   29  [30]  14   18   37   
      10    14   29   14  [30]  18   37   
      10    14   29   14   18  [30]  37    

  - 3rd Round: the 2nd large number is bubbled up

      [10]   14   29   14   18   30  37    
      10    [14]  29   14   18   30  37    
      10     14  [29]  14   18   30  37    
      10     14   14  [29]  18   30  37    
      10     14   14   18  [29]  30  37    
      
  - 4th Round: 

      [10]  14   14   18  29  30  37 
      10   [14]  14   18  29  30  37 
      10    14  [14]  18  29  30  37 
      10    14   14  [18]  29  30  37 
  ...

  ++++++++++++++++++

  - This is the un-optimized method > O(N^2)
  - After log out, we see undefined (out of index)
  - And we make some more loops than we need:
    > For example, in round 2, we don't need to compare the last item in the array since it is the biggest one already (pic-4)
  
  */

'use strict'

// We need to use helper function
const swap = (arr, idx1, idx2) => {
  return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])
}

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr, arr[j], arr[j + 1])
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
    console.log('++++++++++++++++')
  }
  return arr
}

console.log(bubbleSort([99, 33, 53, 26, 16]))
