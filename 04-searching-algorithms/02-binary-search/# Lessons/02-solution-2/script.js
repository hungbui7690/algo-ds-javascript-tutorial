/*
  BINARY SEARCH 
  - nhanh hơn Linear Search 
  
  *** chỉ work với SORTED ARRAY

/////////////////////////////////////////////////////////

  [1,2,3,4,5] 5
  - left = 0, right = 4, mid = 2

  [1,2,[3,4,5]] 5
  - left = 2, right = 4
  - mid = 2

  [1,2,3,[4,5]] 5
  - left = 3
  - mid = 3

/////////////////////////////////////////////////////////

  Worst & Average: O(logn) >> Why Logn >> PIC
  Best: O(1)

*/
'use strict'

const search = (arr, val) => {
  let left = 0
  let right = arr.length - 1

  // (a)
  let mid = Math.floor((left + right) / 2)

  // (b) condition khác
  while (arr[mid] !== val && left <= right) {
    // (i)
    if (val < arr[mid]) right = mid - 1
    else left = mid + 1

    // (ii)
    mid = Math.floor((left + right) / 2)
  }

  // (c)
  if (arr[mid] === val) return mid

  // (d)
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
