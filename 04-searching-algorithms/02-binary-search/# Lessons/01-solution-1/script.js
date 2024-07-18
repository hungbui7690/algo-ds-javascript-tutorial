/*
  BINARY SEARCH 
  - nhanh hơn Linear Search 
  
  *** chỉ work với SORTED ARRAY
*/

const search = (arr, val) => {
  let left = 0
  let right = arr.length

  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    if (arr[mid] > val) right = mid
    else if (arr[mid] < val) left = mid
    else return mid
  }
  return -1
}

console.log(search([1, 2, 3, 4, 5], 3)) // 2
console.log(
  search(
    ['Alabama', 'Alaska', 'Colorado', 'Deleware', 'Mississippi', 'New York'],
    'Mississippi'
  )
) // 4
console.log(search([11, 15, 34, 99, 141, 333, 431, 459, 767], 333)) // 5
console.log(search([11, 15, 34, 99, 141, 333, 431, 459, 767], -1)) // -1
