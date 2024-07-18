/*
  Anagram
  - this is another solution
    > we just need only 1 object


  - we have 2 arrays
      arr1 = aaz
      arr2 = zaa
  - add arr1 to lookup object    
      lookup = {
        a : 2,
        z : 1
      }
  - check key exist in lookup object:
      z in lookup
      a in lookup
      a in lookup
  - check if : 
      lookup[z] has value
      lookup[a] has value
      lookup[a] has value


  *** Line 35: cannot use forEach in this case, since there's no way to break to forEach loop

*/

const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false

  const lookup = {}

  str1.split('').forEach((letter) => {
    lookup[letter] = lookup[letter] + 1 || 1
  })

  const arr2 = str2.split('')

  for (let i = 0; i < arr2.length; i++) {
    if (!arr2[i] in lookup) return false // check key
    if (!lookup[arr2[i]]) return false // check value
  }

  return true
}

console.log(isAnagram('aaz', 'zaa')) // true
console.log(isAnagram('', '')) // true
console.log(isAnagram('cinema', 'iceman')) // true
console.log(isAnagram('awesome', 'awesom')) // false
console.log(isAnagram('rat', 'car')) // false
