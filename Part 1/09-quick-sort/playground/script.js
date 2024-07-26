/*
  QUICK SORT
  - Best, Average: O(nlogn) 
    + Similar to Merge Sort: Divide & Conquer => logn
    + n comparison => nlogn

  - Worst: O(n^2)
      [1,2,3,4,5,6,7,8]
      [1] [2,3,4,5,6,7,8]
          [2], [3,4,5,6,7,8]
    => don't do anything, no divide => O(n)
    => add O(n) comparison at each round => n^2
    => to solve problem, pick pivot random or pick pivot point in the middle (median/medium)

  - Space: O(logn)

  ++++++++++++++++++
  - From previous lesson, we found the swapIndex (or pivotIndex)
  - Example: pivotHelper([65 101 36 23 14 9 99 8 16])
    + The original array changed to [16 36 23 14 9 8 |65| 101 99] 
    + and we got swapIndex = 6

  - This lesson, the quickSort function will turn this array [16 36 23 14 9 8 |65| 101 99] into: 

                                [65]
        ([16 36 23 14 9 8])             ([101 99])
          
    [8 14 9]    [16]    [23 36]         [99]  [101]

                [16]
    [8] [14 9]          [23 36]

    [8]                 [23] [36]
        [14 9]

        [9] [14]

  - collect the item using the order from left to right => we finish the sort 

  [8]   [9]  [14]   [16]     [23]  [36]      [65]    [99]  [101]

  +++++++++++++++++++
  Why base case is start < end

     l           r
    [4 6 9 1 2 5 3]

     l   r
    [3,2,1,[4],6,9,5]

     l r
    [2,1,[3]]

     r
     l
    [1,[2]]


*/

const quickSort = (arr, start = 0, end = arr.length - 1) => {
  // check picture to see the base case
  if (start < end) {
    let pivotIndex = pivot(arr, start, end) // 6
    console.log(arr)

    // because the pivot is placed at correct position => we don't touch it
    quickSort(arr, start, pivotIndex - 1)
    quickSort(arr, pivotIndex + 1, end)
  }

  return arr
}

console.log([65, 101, 36, 23, 14, 9, 99, 8, 16])
console.log(quickSort([65, 101, 36, 23, 14, 9, 99, 8, 16]))

///////////////////////////////
function swap(arr, idxA, idxB) {
  ;[arr[idxA], arr[idxB]] = [arr[idxB], arr[idxA]]
}

function pivot(arr, start = 0, end = arr.length + 1) {
  const pivot = arr[start]
  let swapIndex = start

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++
      swap(arr, swapIndex, i)
    }
  }
  swap(arr, start, swapIndex)

  return swapIndex
}
