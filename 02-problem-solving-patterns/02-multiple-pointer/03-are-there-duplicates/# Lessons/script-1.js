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

  ** We worked on this problem using Frequency Counter before > this time we use Multiple Pointers
*/

const areThereDuplicates = (...arr) => {
  // MUST SORT THE ARRAY
  if (typeof arr[0] === 'number') arr.sort((a, b) => a > b)
  if (typeof arr[0] === 'string') arr.sort()

  let i = 0
  let j = 1

  while (j < arr.length) {
    if (arr[i] === arr[j]) j++
    else {
      i++
      arr[i] = arr[j]
      j++
    }
  }

  if (i + 1 < arr.length) return true
  else return false
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true
