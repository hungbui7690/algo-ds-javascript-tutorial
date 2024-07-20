/*
  - Write a recursive function called reverse which accepts a string and returns a new string in reverse.


*/

const reverse = (str) => {
  let result = ''

  if (!str.length) return

  result += str[str.length - 1]

  console.log(str, result)

  return result + reverse(str.slice(0, str.length - 1))
}

console.log(reverse('hello'))
