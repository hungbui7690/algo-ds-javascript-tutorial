/*
  Anagram: 
  - solution is similar to previous problem
  - cinema === iceman : just need to have the same numbers of characters
  - some anagram: bare/bear, reed/deer, calm/clam, ales/seal, toga/goat, hear/hare, aunt/tuna, paws/wasp, flow/wolf

    > isAnagram('', '') = true
    > isAnagram('aaz', 'zaa') = true
    > isAnagram('anagram', 'margana') = true
    > isAnagram('qwerty', 'qeywrt') = true
    > isAnagram('rat', 'car') = false > wrong characters
    > isAnagram('awesome', 'awesom') = false > different number of characters 

*/

////////////////////////////////////////////////
//

const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false

  const chars1 = {}
  const chars2 = {}

  str1.split('').forEach((char) => {
    chars1[char] = chars1[char] + 1 || 1
  })
  str2.split('').forEach((char) => {
    chars2[char] = chars2[char] + 1 || 1
  })

  for (const key in chars1) {
    if (!(key in chars2)) return false
    if (chars1[key] !== chars2[key]) return false
  }

  return true
}

console.log(
  isAnagram('', '') // true
)
console.log(
  isAnagram('aaz', 'zaa') // true
)
console.log(
  isAnagram('cinema', 'iceman') // true
)
console.log(
  isAnagram('awesome', 'awesom') // false
)
console.log(
  isAnagram('rat', 'car') // false
)
