/*
  Frequency Pattern: 
  - use objects or sets
  
  - problem: create the same function that accepts 2 arrays and return true or false (elements in both arrays no need to be in same order)
    > same(arr1, arr2)
    > same([1,2,3], [4,1,9]) = true (no need to be in same order)
    > same([1,2,3], [1,9]) = false
    > same([1,2,1], [4,4,1]) = false (must be same frequency > if there are 2 numbers 1 in arr1, must have 2 numbers 1 in arr2)

  @@ The solution below is wrong

*/

// This is the wrong solution
// Besides, this is O(n^2), because we are not only use for loop, but also use indexOf()
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false // (a)

  // (b)
  for (let i = 0; i < arr1.length; i++) {
    // 1. take out the position of arr2 that has value equals square root of arr1
    let correctIndex = arr2.indexOf(arr1[i] ** 2)

    // 2. in case there's no element is the power of arr1
    if (correctIndex === -1) {
      return false
    }

    // 3. remove the one that we just found > for example, if we have 3 items, now just only 2
    arr2.slice(correctIndex, 1)
    arr1.slice(i, 1)
  }
  return true
}

console.log(same([1, 2, 3], [4, 1, 9])) // true
console.log(same([1, 2, 3], [1, 9])) // false
console.log(same([1, 2, 1], [4, 4, 1])) // this must return false > not the same frequency > different because we don't count the number of elements
