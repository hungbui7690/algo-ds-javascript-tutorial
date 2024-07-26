/*
  NAIVE STRING 

      i	                                  i
      w o w o m g z o m g	              w o w o m g z o m g
      o m g	                            o m g
      j	                                j
      - Not Match => i++	              - Match => i++ & j++

          i	                                  i
      w o w o m g z o m g	              w o w o m g z o m g
      o m g	                            o m g
        j	                              j
      - Not Match => i++ & j=0          - Match => i++ & j++

              i	                                  i
      w o w o m g z o m g	              w o w o m g z o m g
      o m g	                            o m g
        j	                                  j
      - Match => i++ & j++              - Match => i++ & j = 0 & count++

                  i	                                  i
      w o w o m g z o m g	              w o w o m g z o m g
      o m g	                            o m g
      j	                                j
      - Not Match => i++ & j=0          - Match => i++ & j++

                      i	                                  i
      w o w o m g z o m g	              w o w o m g z o m g
      o m g	                            o m g
        j	                                  j
      - Match => j++ & i++              - Match => count++ 

      => return count = 2


  ++++++++++++++++
  - Time Complexity: O(n)

  */

'use strict'

// While Loop
const naiveSearch = (long, short) => {
  let count = 0
  let j = 0 // for long string
  let i = 0 // for short string

  while (i < long.length) {
    if (long[i] === short[j]) {
      j++
    } else {
      j = 0
    }
    if (short.length === j) {
      count++
      j = 0
    }
    i++
  }

  return count
}

console.log(naiveSearch('lorie loled', 'lol')) // 1
console.log(naiveSearch('wowomgzomg', 'omg')) // 2
console.log(naiveSearch('"harold said haha in hamburg" ', 'ha')) // 4
