/*
  - Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 
    + recursiveRange(n)
      > recursiveRange(3) = 0 + 1 + 2 + 3 = 6
      > recursiveRange(4) = 10
      > recursiveRange(5) = 15
      > recursiveRange(6) = 21

*/

const recursiveRange = (n) => {
  if (n === 0) return
  if (n === 1) return 1

  return n + recursiveRange(n - 1)
}

console.log(recursiveRange(3))
console.log(recursiveRange(4))
console.log(recursiveRange(5))
console.log(recursiveRange(6))
