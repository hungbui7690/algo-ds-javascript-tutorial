/*
  countUniqueValues(array): accepts a SORTED array >> count unique values
  > countUniqueValues([1,1,1,1,1,1,2]) = 2
  > countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) = 7
  > countUniqueValues([]) = 0
  > countUniqueValues([-2,-1,-1,0,1]) = 4

  Method:   
  - i === j  move j
     i
    [1 1 1 2 3 3 4 5 6]
       j

  - now, i !== j
     i
    [1 1 1 2 3 3 4 5 6]
           j

  - move i + set the value at i to j + move j 
       i
    [1 2 1 2 3 3 4 5 6]
             j

  - stop when j touches the end of array
               i
    [1 2 3 4 5 6 4 5 6]
                     j

  - the number of unique values is the position of i
  - O(N)

*/

const countUniqueValues = (arr) => {
  if (arr.length === 0) return

  let i = 0
  let j = 1

  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
    j++
  }
  console.log(i + 1)
}

countUniqueValues([1, 1, 1, 1, 1, 1, 2]) // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2, -1, -1, 0, 1]) // 4
countUniqueValues([-2, -1, -1, 0, 1, 1, 2, 2, 3, 5, 9, 11, 11]) // 9
countUniqueValues([-2, -1, -1, 0, 1]) // 4
