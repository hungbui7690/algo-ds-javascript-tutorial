/*
  countUniqueValues(array): accepts a SORTED array > count unique values
  > countUniqueValues([1,1,1,1,1,1,2]) = 2
  > countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) = 7
  > countUniqueValues([]) = 0
  > countUniqueValues([-2,-1,-1,0,1]) = 4

  - Method: same as previous solution, the different is we use the for loop instead of while loop
  - O(N)
*/

const countUniqueValues = (arr) => {
  if (arr.length === 0) return

  let i = 0
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
  console.log(i + 1)
}

countUniqueValues([1, 1, 1, 1, 1, 1, 2]) // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2, -1, -1, 0, 1]) // 4
countUniqueValues([-2, -1, -1, 0, 1, 1, 2, 2, 3, 5, 9, 11, 11]) // 9
countUniqueValues([-2, -1, -1, 0, 1]) // 4
