/*
  Binary Heap
  - pic
  - is a category in tree
  - conditions:
    + parent node always greater than children nodes
    + no order between siblings
            41
        39      33
      18  27  12

  - NOT a Binary Heap => Binary Search Tree
            33
        18      41
      12  27   39
  

  - Min Binary Heap: opposite
  @@ always save data into left child


******************
  Store Heaps
  - pic
  - from parent's index => find children's index
    + Left Child: 2n + 1 
    + Right Child: 2n + 2 
  - from children's index => find parent's index
    + (n - 1) / 2

*/

class MaxBinaryHeap {
  constructor(value) {
    this.values = []
  }
}
