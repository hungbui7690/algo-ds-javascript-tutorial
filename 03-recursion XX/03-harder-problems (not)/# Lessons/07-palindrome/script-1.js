/*
  - Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
    > palindrome('aca') = true
    > palindrome('noon') = true
    > palindrome('moon') = false
    > palindrome('civic') = true
    > palindrome('abc') = false

*/

const palindrome = (str) => {
  if (str.length === 1) return true

  if (str.length === 2) return str[0] === str[1]

  if (str[0] === str[str.length - 1]) return palindrome(str.slice(1, -1))

  return false
}

console.log(palindrome('aca')) // true
console.log(palindrome('noon')) // true
console.log(palindrome('civic')) // true
console.log(palindrome('moon')) // false
console.log(palindrome('abc')) // false
