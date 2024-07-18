/*
  - Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. 
  - Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

    > fib(n) > trả về vị trí thứ nth trong dãy fibonacci
      > fib(5) = 5
      > fib(6) = 8

*/

///////////////////////////////////////

const fib = (n) => {
  if (n === 0) return 0
  if (n === 1 || n === 2) return 1

  return fib(n - 1) + fib(n - 2)
}

console.log(fib(3)) // 2
console.log(fib(5)) // 5
console.log(fib(6)) // 8
