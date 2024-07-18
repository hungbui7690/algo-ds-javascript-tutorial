/*
  sumRange(3)
      3 + sumRange(2)
              2 + sumRange(1)
                      1
  > sumRange(1) = 1

  Return: đi từ dưới lên
    1 
      1 + 2
        2 + 3 
          5 + 1 (base case) = 6

////////////////////////////////////////////////////////////////////////////

*/

// num = 7 >> sum từ 0 tới 7 >> check callstack để hiểu rõ
function sumRange(num) {
  // (a) base case
  if (num === 1) return 1

  return num + sumRange(num - 1)
}

console.log(sumRange(7))
