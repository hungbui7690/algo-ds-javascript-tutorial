/*
	POWER
	- Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

	- power(base, exp) = power(2,3) = 2^3 = 8

*/

///////////////////////////////////////
//

const power = (base, exp) => {
  // base case: base^0 = 1
  if (exp === 0) return 1

  return base * power(base, exp - 1)
}

console.log(power(2, 2)) // 4
console.log(power(2, 3)) // 8
console.log(power(2, 4)) // 16
console.log(power(3, 2)) // 9
console.log(power(3, 3)) // 27
console.log(power(5, 2)) // 25
console.log(power(5, 3)) // 125
