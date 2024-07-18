/*
  NAIVE STRING 

  - giả sử chúng ta muốn đếm số lần xuất hiện của 1 string trong 1 string khác dài hơn 
    + đếm số từ "ha" trong string: 
        "harold said haha in hamburg" 
    + chúng ta đã học >> cho con trỏ chạy từ đầu tới cuối và count 

/////////////////////////////////////////////////////////
  Từ Trái sang Phải

  i	                                i
  o m g	                            o m g
  w o w o m g z o m g	              w o w o m g z o m g
  j	                                  j
  - ko match >> j++	                - match >> i++ & j++

    i	                              i
  o m g	                            o m g
  w o w o m g z o m g	              w o w o m g z o m g
      j	                                  j
  - ko match >> j++	& i--           - match >> i++ & j++

    i	                                  i
  o m g	                            o m g
  w o w o m g z o m g	              w o w o m g z o m g
          j	                                  j
  - match >> j++ & i++              - match >> j++ & [if i = short.lenth >> count + 1] + reset i

  i	                                i
  o m g	                            o m g
  w o w o m g z o m g	              w o w o m g z o m g
              j	                                  j
  - ko match >> j++                 - match >> j++ & i++

    i	                                  i
  o m g	                            o m g
  w o w o m g z o m g	              w o w o m g z o m g
                  j	                                  j
  - match >> i++ & j++              - match >> count++ 

/////////////////////////////////////////////////////////
  Giải thích vì sao dùng long[i+j] >> i: cho long, j cho short

    0 1 2 3 4 5 6 7 8 9 10
    l o r i e   l o l e d
    l o l
  
  + compare short vs long 
    j = 0 1 2
        l o l 

    i = 6 7 8 
        l o l

    short[j]  = short[0] = l
    long[i+j] = long[6]  = l
    
    short[j]  = short[1] = o
    long[i+j] = long[7]  = o

    short[j]  = short[2] = l
    long[i+j] = long[8]  = l
    

/////////////////////////////////////////////////////////

*/

'use strict'

// O(n^2)
const naiveSearch = (long, short) => {
  let count = 0
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break
      if (short.length === j + 1) count++
    }
  }
  return count
}

console.log(naiveSearch('lorie loled', 'lol')) // 1
console.log(naiveSearch('wowomgzomg', 'omg')) // 2
