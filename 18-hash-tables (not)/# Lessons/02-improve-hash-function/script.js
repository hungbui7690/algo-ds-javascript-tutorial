'use strict'
/*

//////////////////////////////////////////////////////

  IMPROVE OUR HASH FUNCTION
  - sử dụng min 
  - thêm prime # (PIC sẽ thấy sự lợi hại)
  - đây chỉ là principle, ko biết rõ 

*/

function hash(key, len) {
  let total = 0

  // (***)
  let WEIRD_PRIME = 31

  // (***)
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i]
    let value = char.charCodeAt(0) - 96

    // (***)
    total = (total + WEIRD_PRIME + value) % len
  }

  return total
}

console.log(hash('blue', 10)) // 0
console.log(hash('cyan', 10))
console.log(hash('purple', 10))
console.log(hash('maroon', 10))
console.log(hash('orangered', 10))
console.log(hash('pink', 10)) // 0
