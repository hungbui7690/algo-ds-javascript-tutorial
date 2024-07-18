/*
  MERGE SORT 
  - Khó hơn mấy thằng trước, nhưng nhanh hơn 
  - Mấy thằng trước: Bubble, Insertion, Selection ko work well khi work với nhiều data
    + Đem 2 dòng dưới sang bên đó và test >> lâu >> khoảng 20x
        const data = Array.apply(null, {length: 10000}).map(Function.call, Math.random())
        bubbleSort(data)

  - Nhưng nếu test với Merge Sort thì chưa tới 1s
  - split, sort and merge

  > Visualization
    > https://visualgo.net/en/sorting


/////////////////////////////////////////////////////////////
  
  (********)
  - Chúng ta đã viết xong phần merge(arr1, arr2)
  - giờ làm sao chúng ta chia array làm 2 phần nhỏ 
    > sử dụng slice() 
    > chia đôi tới khi nào array empty hoặc chỉ còn 1 element 
    > lúc này chúng ta sử dụng merge(arr1, arr2) đã viết và merge lại
  - sử dụng recursion
    > PIC: merge-sort-tree
*/

//////////////////////////////////////////////////////

const merge = (arr1, arr2) => {
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

  // (***)
  return results
}

console.log([99, 100, 11, 32, 77, 88, 101])

//////////////////////////////////////////////////

// (****)
const mergeSort = (arr) => {
  // (a)
  if (arr.length <= 1) return arr

  // (b)
  let mid = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, mid)
  const rightArr = arr.slice(mid)

  console.log('************')
  console.log('left', leftArr)
  console.log('right', rightArr)
  console.log('************')

  // (c)
  let left = mergeSort(leftArr)
  let right = mergeSort(rightArr)

  // (d)
  return merge(left, right)
}

console.log(mergeSort([99, 100, 11, 32, 77, 88, 101]))
