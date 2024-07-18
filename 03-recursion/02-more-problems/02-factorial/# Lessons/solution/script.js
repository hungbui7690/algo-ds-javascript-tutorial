/*
	- Write a function factorial which accepts a number and returns the factorial of that number. 
	- A factorial is the product of an integer and all the integers below it
		> e.g. 
			- factorial four 
				= 4! 
				= 4 * 3 * 2 * 1 
				= 24.  

			- factorial zero
				= 0!
				= 1
*/

///////////////////////////////////////
//

const factorial = (n) => {
  if (n === 0) return 1

  return factorial(n - 1) * n
}

console.log(factorial(0)) // 1
console.log(factorial(1)) // 1
console.log(factorial(2)) // 2
console.log(factorial(3)) // 6
console.log(factorial(4)) // 24
