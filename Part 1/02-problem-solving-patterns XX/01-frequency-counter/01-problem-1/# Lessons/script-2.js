/*
  Frequency Pattern: 
  - there are 2 methods to check a property exists in an object or not 
    > key in object
    > object.hasOwnProperty('key')

*/

let user = {
  name: 'John Doe',
  age: 40,
}

console.log('name' in user) // true
console.log('age' in user) // true
console.log('job' in user) // false

console.log(user.hasOwnProperty('name')) // true
console.log(user.hasOwnProperty('age')) // true
console.log(user.hasOwnProperty('job')) // false
