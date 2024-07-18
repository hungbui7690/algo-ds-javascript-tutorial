/*
  Frequency Pattern: 
  - use objects or sets

  - problem: create the same function that accepts 2 arrays and return true or false (elements in both arrays no need to be in same order)
    > same(arr1, arr2)
    > same([1,2,3], [4,1,9]) = true (no need to be in same order)
    > same([1,2,3], [1,9]) = false
    > same([1,2,1], [4,4,1]) = false (must be same frequency > if there are 2 numbers 1 in arr1, must have 2 numbers 1 in arr2)


*/

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false

  // create 2 empty objects
  const counter1 = {}
  const counter2 = {}

  // add items from array to objects
  for (let item of arr1) {
    counter1[item] = counter1[item] + 1 || 1
  }
  for (let item of arr2) {
    counter2[item] = counter2[item] + 1 || 1
  }

  console.log(counter1, counter2)

  // compare
  for (let key in counter1) {
    // check the keys
    if (!(key ** 2 in counter2)) return false

    // check the values
    if (counter1[key] !== counter2[key ** 2]) return false
  }

  return true
}

console.log(same([1, 2, 3], [4, 1, 9])) // true
console.log(same([1, 2, 3], [1, 9])) // false
console.log(same([1, 2, 1], [4, 4, 1])) // this must return false, not same frequency
