/*
  sumZero(sorted_int_array)
  - if pair return 0 > return that pair
  - if pair not return 0 > return undefined
  
    > sumZero([-3,-2,-1,0,1,2,3]) = [-3,3]
    > sumZero([-2,0,1,3]) = undefined
    > sumZero([1,2,3]) = undefined

  - THIS METHOD NOT WORK REALLY WELL > O(n^2)

*/

// O(n^2)
// This method has 2 pointers next to each other > which is not ok
const sumZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]]
      }
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]))
console.log(sumZero([-3, -2, -1, 0, 2, 4, 5, 6]))
console.log(sumZero([-2, 0, 1, 3]))
