'use strict'
/*

//////////////////////////////////////////////////////

  QUEUES
  - sử dụng Array để implement thì ko ổn lắm do FIFO thì phải dùng push O(1) + shift O(N) hoặc unshift O(N) + pop O(1) >> phải reindex  >> KO IDEAL 

  - sử dụng Singly Linked List sẽ ok hơn, do chúng ta có "head" và "tail"
    + ENQUEUE: unshift O(1)  +  DEQUEUE:  pop O(N) >>> NOT GOOD
    + push O(1) + shift O(1) >> GOOD 

  > Tự làm:
    - Node class
    - Queue class constructor 
    - Enqueue
    - Dequeue
*/
