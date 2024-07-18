'use strict'
/*

//////////////////////////////////////////////////////

  HEAPS
  - heap là 1 category trong tree
  - max binary heap: 
    + parent lớn hơn children 
    + ko quan tâm tới sự lớn nhỏ của siblings
  - min binary heap: ngược lạiv 
  - luôn luôn lưu data vào child bên trái trước 


  STORE HEAPS >> PIC
  - có index của parent, tìm children 
    + 2n + 1 (LEFT CHILD)
    + 2n + 2 (RIGHT CHILD)

  - có index child, tìm parent 
    + (n - 1) / 2

*/

class MaxBinaryHeap {
  constructor(value) {
    this.values = []
  }
}
