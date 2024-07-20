/*
  LINEAR SEARCH
  - run from beginning to end
  - use for <NOT> <SORTED> array
  
      Best: O(1)
      Average: O(n)
      Worst: O(n)

  - search([1, 2, 3, 4, 5], 3) -> return 2
  - search([99, 72, 13, 104], 3) -> return -1 (not found)
  - search([99, 72, 13, 104], 13) -> return 2

*/

const search = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i
  }
  return -1
}

console.log(search([1, 2, 3, 4, 5], 3)) // 2
console.log(search([99, 72, 13, 104], 3)) // -1
console.log(search([99, 72, 13, 104], 13)) // 2
