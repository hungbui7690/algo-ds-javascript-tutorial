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

  merge([1,10,50], [2,14,99,100])
  > [1,2,10,14,50,99,100]

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
  - lúc này đã hết array 1 
    > lấy hết phần còn lại của array 2 vào bỏ vào result

         _              _
  [1 10 50]       [2 14 99 100]     
  [1 2 10 14 50 99 100]  

*/

//////////////////////////////////////////////////////
// Đây là chúng ta tự làm dựa theo mô tả phía trên

const merge = (arr1, arr2) => {
  // (a)
  const results = []
  let first = 0 // index
  let second = 0

  // (b)
  while (first < arr1.length && second < arr2.length) {
    if (arr1[first] < arr2[second]) {
      results.push(arr1[first])
      first++
    }
    if (arr2[second] < arr1[first]) {
      results.push(arr2[second])
      second++
    }
  }
  console.log(results) // sau khi so sánh xong
  console.log('**************************')

  // (c) bỏ phần còn dư vào results []
  while (first < arr1.length || second < arr2.length) {
    if (first < arr1.length) {
      results.push(arr1[first])
      first++
    }
    if (second < arr2.length) {
      results.push(arr2[second])
      second++
    }
  }

  console.log(results) // sau khi bỏ phần còn dư vào
}

merge([1, 10, 50], [2, 14, 99, 100])
