/*
  MERGE SORT 
  - more complex than previous sort algos, but faster 


  - Previous Sort Algos: Bubble, Insertion, Selection NOT work well when working with huge amount of data
  - Test: it takes about 20 times 
      const data = Array.apply(null, {length: 10000}).map(Function.call, Math.random())
      bubbleSort(data)
  - But if we use Merge Sort => less than 1s

  
  - How: split, sort and merge
    => merge(leftArr, rightArr)
    => merge([1,10,50], [2,14,99,100])
    -> results = [1,2,10,14,50,99,100]


  - This is the Merge Part in MERGE SORT
    - Step 1: compare and push into result array

        LEFT              RIGHT
      [(1) 10 50]       [(2) 14 99 100]     
      => 1 < 2 
      => results = [1]         

      [1 (10) 50]       [(2) 14 99 100]     
      => 2 < 10
      => results = [1 2]       

      [1 (10) 50]       [2 (14) 99 100]    
      => 10 < 14
      => results = [1 2 10]       

      [1 10 (50)]       [2 (14) 99 100]     
      => 14 < 50
      => results = [1 2 10 14]    

      [1 10 (50)]       [2 14 (99) 100]     
      => 50 < 99
      => results = [1 2 10 14 50] 


    - Step 2: Take all elements in array 2 and save in result

      [1 10 50]       [2 14 (99) 100]     
      => results = [1 2 10 14 50 99]  

      [1 10 50]       [2 14 99 (100)] 
      => results = [1 2 10 14 50 99 100]  

*/

const merge = (left, right) => {
  const results = []
  let l = 0
  let r = 0

  // Step 1
  while (l < left.length && r < right.length) {
    console.log({ left: left[l], right: right[r] })

    if (left[l] < right[r]) {
      results.push(left[l])
      l++
    }
    if (right[r] < left[l]) {
      results.push(right[r])
      r++
    }
    console.log(results)
  }
  console.log('***************')

  // Step 2
  while (l < left.length || r < right.length) {
    if (l < left.length) {
      results.push(left[l])
      l++
    }
    if (r < right.length) {
      results.push(right[r])
      r++
    }
  }

  console.log(results)
}

merge([1, 10, 50], [2, 14, 99, 100])
