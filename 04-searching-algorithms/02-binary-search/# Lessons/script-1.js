/*
  BINARY SEARCH 
  - divide & conquer
  - faster than Linear Search
  - only work with <SORTED> array
  - the method below is working, but not ideal in logic 
    > since we set r = arr.length, but NOT arr.length-1

++++++++++++++
  - Example 1:
         l       m=4     r=8   
    X = [1 2 3 4 5 6 7 8]     3
    => l = 0, r = 8 (x.length, not x.length-1)
    => m = (0+8)/2 = 4
    => X[m] = 4 > 3 => set r = m = 4


         l   m   r   
    X = [1 2 3 4 5 6 7 8]     3
    => m = (0+4)/2 = 2
    => X[m] = 3 === 3 => return m = 2

++++++++++++++
  - Example 2:

     l   m=2   r=5    
    [1 2 3 4 5]     5
    => m = (0+5)/2 = 2
    => X[m] = 3 < 5 =>  set l = m = 2


         l m   r=5    
    [1 2 3 4 5]     5
    => m = (2+5)/2 = 3
    => X[m] = 4 < 5 => set l = m = 3


           l m r=5    
    [1 2 3 4 5]     5
    => m = (3+5)/2 = 4
    => X[m] = 5 === 5


*/

const search = (arr, target) => {
  let left = 0
  let right = arr.length

  while (left < right) {
    let mid = Math.floor((left + right) / 2)

    if (arr[mid] > target) right = mid
    else if (arr[mid] < target) left = mid
    else return mid
  }
  return -1
}

console.log(search([1, 2, 3, 4, 5, 6, 7, 8], 3)) // 2
console.log(search([1, 2, 3, 4, 5], 5)) // 4
console.log(search([1, 2, 3, 4, 5], 3)) // 2
console.log(
  search(
    ['Alabama', 'Alaska', 'Colorado', 'Deleware', 'Mississippi', 'New York'],
    'Mississippi'
  )
) // 4
console.log(search([11, 15, 34, 99, 141, 333, 431, 459, 767], 333)) // 5
console.log(search([11, 15, 34, 99, 141, 333, 431, 459, 767], -9)) // -1
