/*
  countUniqueValues(array): accepts a SORTED array > count unique values
    > countUniqueValues([1,1,1,1,1,1,2]) = 2
    > countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) = 7
    > countUniqueValues([]) = 0
    > countUniqueValues([-2,-1,-1,0,1]) = 4

  - METHOD 1:  use Frequency Counter
  - // O(n)


*/

const countUniqueValues = (arr) => {
  const values = {}

  arr.forEach((num) => {
    values[num] = values[num] + 1 || 1
  })

  console.log(Object.keys(values))
  console.log(Object.keys(values).length)
}

countUniqueValues([1, 1, 1, 1, 1, 1, 2]) // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2, -1, -1, 0, 1]) // 4
