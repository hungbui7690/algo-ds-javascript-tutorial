/*
  - Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

  - Examples:
    > areThereDuplicates(1, 2, 3) // false
    > areThereDuplicates(1, 2, 2) // true 
    > areThereDuplicates('a', 'b', 'c', 'a') // true 

  - Restrictions:
    > Time - O(n)
    > Space - O(n)

  - Bonus:
    > Time - O(n log n)
    > Space - O(1)

*/

function areThereDuplicates(...arr) {
  if (typeof arr[0] === 'number') arr.sort((a, b) => a > b)
  if (typeof arr[0] === 'string') arr.sort()

  let i = 0
  let j = 1

  // *** THIS IS THE DIFFERENCE WITH PREVIOUS SOLUTION
  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      return true
    }
    i++
    j++
  }

  return false
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true
