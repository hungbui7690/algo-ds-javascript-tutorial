/*
  MERGE SORT 

/////////////////////////////////////////////////////////////

    (***) Đây là phần MERGE trong MERGE SORT

   _               _
  [1 10 50]       [2 14 99 100]     
  [1]         
  - 1 vs 2 >> 1 nhỏ hơn
      _            _
  [1 10 50]       [2 14 99 100]     
  [1 2]       
  - 10 vs 2 >> 2 nhỏ hơn 
      _               _
  [1 10 50]       [2 14 99 100]    
  [1 2 10]       

         _            _
  [1 10 50]       [2 14 99 100]     
  [1 2 10 14]    

         _              _
  [1 10 50]       [2 14 99 100]     
  [1 2 10 14 50] 
  - 50 vs 99 >> 50 nhỏ hơn 
  - lúc này đã hết array 1: array2 còn dư 99 và 100

         _              _
  [1 10 50]       [2 14 99 100]     
  [1 2 10 14 50 99 100]  
  - lấy phần dư của array 2 và bỏ vào results[]
*/

//////////////////////////////////////////////////////
// Đây là của instructor >> gần như y chang của mình

const merge = (arr1, arr2) => {
  const results = []

  // (***) change variable name
  let i = 0
  let j = 0

  while (i < arr1.length && j < arr2.length) {
    if (arr1[j] < arr2[j]) {
      results.push(arr1[i])
      i++
    }
    if (arr2[j] < arr1[i]) {
      results.push(arr2[j])
      j++
    }
  }

  // (***) using 2 while loops here
  while (i < arr1.length) {
    results.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    results.push(arr2[j])
    j++
  }

  console.log(results)
}

merge([1, 10, 50], [2, 14, 99, 100])
