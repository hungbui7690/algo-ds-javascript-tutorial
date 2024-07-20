/*


*/

const arr = [2, 5, 5, 2, 3, 4, 3, 5]

const counter = {}

for (const item of arr) {
  counter[item] = counter[item] + 1 || 1
}

console.log(counter)
