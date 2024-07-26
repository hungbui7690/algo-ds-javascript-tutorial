/*
  MERGE SORT 
  - we finished the merge part: merge(left, right)
  - now we need to divide the whole array into 2 parts 
    + use slice()
    + divide until the original array is empty or left with 1 element
    + now, we can use merge(left, right)
    + use recursion
    + pic: merge-sort-tree

  ++++++++++++++
  - mid: arr.length/2 = 6 / 2 = 3  

                          [1 10 50 2 14 99 100]
          [1 10 50 2]              merge              [14 99 100]  
      [1 10] merge [50 2]                          [14] merge [99 100]
  [1] merge [10]    [50] merge [2]            [14] merge      [99] merge [100]

*/

console.log([1, 10, 50, 2, 14, 99, 100])

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr

  let mid = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, mid)
  const rightArr = arr.slice(mid)

  console.log('************')
  console.log('left', leftArr)
  console.log('right', rightArr)
  console.log('************')

  let left = mergeSort(leftArr)
  let right = mergeSort(rightArr)

  return merge(left, right)
}

console.log(mergeSort([1, 10, 50, 2, 14, 99, 100]))

/////////////////////////

function merge(arr1, arr2) {
  const results = []

  let i = 0
  let j = 0

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i])
      i++
    }
    if (arr2[j] < arr1[i]) {
      results.push(arr2[j])
      j++
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    results.push(arr2[j])
    j++
  }
  return results
}
