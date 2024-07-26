/*
  Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

    capitalizeFirst(["hello", "test"]) -> ["Hello", "Test"]


    NOT DONE
*/

const capitalizeFirst = (arr) => {
  let result = []

  if (arr.length === 0) return

  console.log(arr)
  // result.push(arr.at(0)[0].toUpperCase() + arr.at(0).slice(1))

  return result.concat(arr.slice(1))
}

console.log(capitalizeFirst(['hello', 'test']))
