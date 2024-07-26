/*
  NAIVE STRING 
  - assume that we want to count how many times the a substring appear in another longer string
    > For example, count the word "ha" in the string: "harold said haha in hamburg" 
  - like we learned before > set the pointer to run from the beginning to the end and count

  ++++++++++++++++
  Explain why we use long[i+j] -> i: for long, j for short
  - Consider the example below: short = "lol", long = "lorie loled"
  - Check this condition: if (short[j] !== long[i + j]) break
  

    index   0 1 2 3 4 5 6 7 8 9 10
    long    l o r i e   l o l e d   i
    short   l o l                   j
    

    compare short vs long 
      i = 6 7 8 
          l o l
      j = 0 1 2
          l o l 

    if (short[j] !== long[i + j]) break
      short[j]  = short[0] = l
      long[i+j] = long[6]  = l
      
      short[j]  = short[1] = o
      long[i+j] = long[7]  = o

      short[j]  = short[2] = l
      long[i+j] = long[8]  = l

    => this what this condition does is 

  ++++++++++++++++
  - Time Complexity: O(n^2)



  +++++++++++++++++++
  Example 1: count how many times the word "omg" appears in the string "wowomgzomg": from left to right. 
  - This works for the for loop below

      i	                                  i
      w o w o m g z o m g	              w o w o m g z o m g
      o m g	                            o m g
      j	                                j
      - Not Match => i++ & j = 0        - Match => i++ & j++

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
*/

'use strict'

const naiveSearch = (long, short) => {
  let count = 0
  let j = 0

  for (let i = 0; i < long.length; i++) {
    // console.log({
    //   'short[j]': short[j],
    //   'long[i]': long[i],
    //   ' * i': i,
    //   ' * j': j,
    //   count: count,
    // })
    if (short.length === j + 1) {
      count++
      j = 0
    }
    if (short[j] !== long[i]) {
      j = 0
      continue
    }
    if (short[j] === long[i]) {
      j++
    }
  }
  return count
}

console.log(naiveSearch('lorie loled', 'lol')) // 1
console.log(naiveSearch('wowomgzomg', 'omg')) // 2
console.log(naiveSearch('"harold said haha in hamburg" ', 'ha')) // 4
