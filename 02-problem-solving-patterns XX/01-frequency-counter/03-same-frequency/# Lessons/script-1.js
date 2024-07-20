/*
  - Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

  - Your solution MUST have the following complexities:
    + Time: O(N)



  - Sample Input:
    > sameFrequency(182, 281) // true
    > sameFrequency(34, 14) // false
    > sameFrequency(3589578, 5879385) // true
    > sameFrequency(22, 222) // false

*/

////////////////////////////////////////////////
//

const sameFrequency = (int1, int2) => {
  const lookup1 = {}
  const lookup2 = {}

  int1
    .toString()
    .split('')
    .forEach((num) => {
      lookup1[num] = lookup1[num] + 1 || 1
    })

  int2
    .toString()
    .split('')
    .forEach((num) => {
      lookup2[num] = lookup2[num] + 1 || 1
    })

  for (key in lookup1) {
    if (!(key in lookup2)) return false
    if (lookup1[key] !== lookup2[key]) return false
  }

  return true
}

console.log(sameFrequency(182, 281)) // true
console.log(sameFrequency(34, 14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22, 222)) // false
