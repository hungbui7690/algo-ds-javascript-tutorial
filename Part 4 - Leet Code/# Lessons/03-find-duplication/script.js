/*
  Find Duplications in a String


*/

'use strict'

let strArray = ['q', 'w', 'w', 'w', 'e', 'i', 'i', 'u', 'r']
function findDuplicates(arr) {
  return arr.filter((item, index) => {
    console.log('index:', index, 'indexOf:', arr.indexOf(item))
    return arr.indexOf(item) !== index
  })
}

console.log(findDuplicates(strArray)) // All duplicates
// console.log([...new Set(findDuplicates(strArray))]) // Unique duplicates
