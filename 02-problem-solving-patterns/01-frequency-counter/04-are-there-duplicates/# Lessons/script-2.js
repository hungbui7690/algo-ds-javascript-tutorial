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


  *** METHOD 2: use Set
*/

///////////////////////////////////////
//

const areThereDuplicates = (...arr) => {
  const set = new Set(arr)
  return set.size === arr.length
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true
