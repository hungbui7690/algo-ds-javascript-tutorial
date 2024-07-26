/*
  Frequency Pattern: 
  - loop through array: use for..of
  - loop through object: use for..in

*/

// 1. Loop through array
const arr = [1, 2, 3, 4]

for (const item of arr) {
  console.log(item)
}

// 2. Loop through object
let user = {
  name: 'John Doe',
  age: 40,
}
for (const key in user) {
  console.log(key, user[key])
}
// name John Doe
// age 40
