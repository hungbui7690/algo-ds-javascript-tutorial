/*
  Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false => opposite to all()

  - Example: 
    + callback is checkEven (check number is even or not) 
      => In this case, if all numbers in the array is odd, return false. 
      => If only one element in the array is even, return true

        someRecursive([1 2 3], checkEven) -> true
        someRecursive([0 2 5], checkEven) -> true
        someRecursive([1 3 5], checkEven) -> false

*/

const checkEven = (x) => {
  if (x % 2 === 0) return true
  return false
}

const someRecursive = (arr, fn) => {
  if (!arr.length) return false
  if (fn(arr[0])) return true
  return someRecursive(arr.slice(1), fn)
}

console.log(someRecursive([1, 2, 3, 4], checkEven)) // true
console.log(someRecursive([2, 4, 8, 14], checkEven)) // true
console.log(someRecursive([1, 3, 5], checkEven)) // true
