/*
  INTRO
  - From the 2 below examples, which one is better? 
  - How can we measure which one is better? 
  
  - What is "better"?
    + Faster 
    + Cost less memory when we work with 100_000?
    + Easy to read 
  > We just need to worry about the first 2

////////////////////////////////////////////////////////////////////////

  HOW TO MEASURE
  - use Time 
      performance.now()

  - we can see, though in the same machine, the measured time still changes
    > if we use this way, we can't measure the algorithm exactly

  - use time to measure is not ok
  - use Big-O Notation

    https://rithmschool.github.io/function-timer-demo/

////////////////////////////////////////////////////////////////////////

  BIG-O NOTATION
  - trend 
  - input vs runtime 
  - when talking about Big-O > we talk about the worst case 

    > O(2n) = O(100n) = O(n)
    > O(500) = 0(1)
    > O(13n^2) = O(n^2 + 5n + 8) =  O(n^2)

////////////////////////////////////////////////////////////////////////

  OBJECT > PIC
  ARRAY > PIC

*/

////////////////////////
// Ex1: O(n)
function sum1(n) {
  let total = 0 // O(1)

  for (let i = 1; i <= n; i++) total += i // O(n)

  return total // O(1)
}

let t1 = performance.now()
sum1(1_000_000_000)
let t2 = performance.now()

console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`)

////////////////////////
// Ex2: O(1)
function sum2(n) {
  return (n * (n + 1)) / 2
}

let t3 = performance.now()
sum2(1_000_000_000)
let t4 = performance.now()

console.log(`Time elapsed: ${(t4 - t3) / 1000} seconds`)

////////////////////////
// Ex3: O(n^2) => nested loop
function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log((i, j))
    }
  }
}

////////////////////////
// Ex4: O(n)
function logAtMost(n) {
  for (let i = 0; i < Math.max(5, n); i++) {
    console.log(i)
  }
}

////////////////////////
// Ex4: O(1)
function logAtLeast(n) {
  for (let i = 0; i < Math.min(5, n); i++) {
    console.log(i)
  }
}
