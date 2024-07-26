/*
  BINARY SEARCH 
  - This one is different than the previous one:
    + This time, we set the Right pointer to the end of the array => r = array.length - 1
    + When we move the Left pointer, we set it to Mid + 1
    + When we move the Right pointer, we set it to Mid - 1

        l   m   r
    x= [1 2 3 4 5]  5

    - Step 1:
      + l = 0, r = 4, m = 2
      + x[m] = 3 < 5 => set l = m + 1 = 3


              l
              m r
    x= [1 2 3 4 5]  5

    - Step 2: 
      + l = m = 3, r = 4
      + x[m] = 4 < 5 => set l = m + 1 = 4 === r


                l
                m
                r
    x= [1 2 3 4 5]  5
    - Step 3: 
      + l = m = 3, r = 4
      + x[m] = 5 === 5 => return m = 3


  - Worst & Average: O(logn) 
    > Why Logn > PIC
  - Best: O(1)

*/

'use strict'

const search = (arr, target) => {
  let left = 0
  let right = arr.length - 1

  let mid = Math.floor((left + right) / 2)

  while (arr[mid] !== target && left <= right) {
    if (target < arr[mid]) right = mid - 1
    else left = mid + 1

    mid = Math.floor((left + right) / 2)
  }

  if (arr[mid] === target) return mid

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
