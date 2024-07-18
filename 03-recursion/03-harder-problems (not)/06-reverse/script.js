/*
  - Write a recursive function called reverse which accepts a string and returns a new string in reverse.
*/

///////////////////////////////////////

const reverseStr = (str) => {
  if (str.length <= 1) return str // return str chứ ko phải return
  return reverseStr(str.slice(1)) + str[0]
}

console.log(reverseStr('hello'))
