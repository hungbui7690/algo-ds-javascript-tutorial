/*
  Factorial Iterative 
  - Factorial of 4 
    = 4! 
    = 4 * 3 * 2 * 1

////////////////////////////////////////////////////////////////////////////

*/

const factorial = (n) => {
  let result = 1
  for (let i = 1; i <= n; i++) result *= i

  return result
}

console.log(factorial(3))
console.log(factorial(4))
