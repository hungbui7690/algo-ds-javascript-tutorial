/*
  I. sumRange(3)
    3 + sumRange(2)
      2 + sumRange(1)
              1

  II. go from bottom to top              
    1 
      1 + 2
        2 + 3 
          5 + 1 (base case) = 6


  - In step I, the engine does not evaluate the value of the expressions (i.e sumRange(3), sumRange(2)...)
  - In step II, the engine will evaluate the value of the expressions

*/

function sumRange(num) {
  if (num === 1) return 1

  return num + sumRange(num - 1)
}

// sum from 0 to 3 => check callstack to understand
console.log(sumRange(3))
