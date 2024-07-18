/*
  Add item from array to object with counter
  - Assume we have an array: 
    [2 5 5 2 3 4 3 5]

  - We want to create an object like this from the array above
    {
      2 : 2,
      3 : 2,
      4 : 1,
      5 : 3
    }

*/

const arr = [2, 5, 5, 2, 3, 4, 3, 5]

const counter = {}

for (const item of arr) {
  counter[item] = counter[item] + 1 || 1
}

console.log(counter)
