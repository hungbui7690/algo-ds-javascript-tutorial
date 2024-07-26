/*
  Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened. Just 1 level in depth

  - flatten([1 2 [3 4] 5]) -> [1 2 3 4 5]
  - flatten([1 2 [3 [4]] 5]) -> [1 2 3 [4] 5]

*/

const flatten = (arr) => {
  let result = []

  if (arr.length <= 1) return arr[0]

  if (Array.isArray(arr.at(0))) result = [...result, ...arr.at(0)]
  else result.push(arr.at(0))

  return result.concat(flatten(arr.slice(1)))
}

console.log(flatten([1, 2, [3, 4, 5], 7]))
console.log(flatten([1, 2, [3, 4, 5], [9, 12]]))
