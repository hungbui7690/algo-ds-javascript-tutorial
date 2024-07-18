'use strict'
/*

//////////////////////////////////////////////////////

  HASH TABLES - INTRO
  - thường đc gọi là "Hash Map"
  - đây là Objects trong JS 
  - bài này chúng ta sẽ build Objects

  MORE 
  - để tạo hash table, chúng ta sẽ phải dùng hash function để convert "string" thành index
  - ví dụ: 
    + pink sẽ đc convert thành 0
    + orangered sẽ thành 7 chẳng hạn 

  HASH FUNCTIONS
  - nhận vào arbitrary # of data và trả về "fixed" value 


  OUR HASH FUNCTION
  > hash(str, 100): array chúng ta sẽ chứa 100 items >> trả về index từ 0 tới 99
  > hash(str, 9): từ 0 tới 8
  >> check PIC  >> sử dụng charCodeAt() - 96 
                >> sau đó sử dụng modulo

*/

function hash(key, len) {
  let total = 0
  for (let char of key) {
    let value = char.charCodeAt(0) - 96 // check pic để hiểu chỗ này
    total = (total + value) % len
  }

  return total
}

console.log(hash('blue', 10)) // 0
console.log(hash('cyan', 10))
console.log(hash('purple', 10))
console.log(hash('maroon', 10))
console.log(hash('orangered', 10))
console.log(hash('pink', 10)) // 0
