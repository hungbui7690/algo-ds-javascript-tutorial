/*
  NAIVE STRING 

  - giả sử chúng ta muốn đếm số lần xuất hiện của 1 string trong 1 string khác dài hơn 
    + đếm số từ "ha" trong string: 
        "harold said haha in hamburg" 
    + chúng ta đã học >> cho con trỏ chạy từ đầu tới cuối và count 

/////////////////////////////////////////////////////////
  Từ Trái sang Phải: 

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


  */
'use strict'

/////////////////////////////////////////////////////////

// O(n2)
const naiveSearch = (long, short) => {
  let count = 0
  let i = 0
  let j = 0

  while (j < long.length) {
    if (long[j] === short[i]) {
      i++
    } else {
      i = 0
    }
    if (short.length === i) {
      count++
      i = 0
    }
    j++
  }

  return count
}

console.log(naiveSearch('lorie loled', 'lol')) // 1
console.log(naiveSearch('wowomgzomg', 'omg')) // 2
