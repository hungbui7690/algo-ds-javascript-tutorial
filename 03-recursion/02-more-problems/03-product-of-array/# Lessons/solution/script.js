/*
  - Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

    > productOfArray(arr) 
      > productOfArray([1,2,3]) = 6
      > productOfArray([2,3,7]) = 42

*/

///////////////////////////////////////

const productOfArray = (arr) => {
  let result = 1

  if (arr.length === 0) return 1

  result *= arr[0]

  return result * productOfArray(arr.slice(1))
}

console.log(productOfArray([1, 2, 3]))
console.log(productOfArray([2, 3, 7]))
