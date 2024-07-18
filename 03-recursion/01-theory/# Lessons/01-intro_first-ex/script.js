/*
  Wizard đưa cho Martin 1 task: 
  - check xem trong list có số lẻ hay ko? (đương nhiên vì Martin còn nhỏ nên ko biết, chỉ có thể đi hỏi) 
    [2,4,6,8,10]

  - Martin tìm tới Angry Dragon, nhưng Dragon nói rằng nó chỉ có thể cho biết con só đầu tiên trong list mà thôi 
    [2,4,6,8,10]

  - Vì vậy, Martin để nó check con số đầu tiên: 
    [[2],4,6,8,10] >> chẵn
    [[4],6,8,10] >> chẵn
    [[6],8,10] >> chẵn
    [[8],10] >> chẵn
    [10] >> chẵn
    [] >> ko có số sao tính đc

  - Martin kiểm tra lại: 
    [] >> NO ODD
    [10] >> NO ODD
    [[8],10] >> NO ODD
    [[6],8,10] >> NO ODD
    [[4],6,8,10] >> NO ODD
    [[2],4,6,8,10] >> NO ODD 

    >> Kết luận: ko có số lẻ >> đây là Recursion: càng ngày list càng nhỏ, và STOP khi đụng condition

////////////////////////////////////////////////////////////////////////////

  Recursion là gì? 
  - A function that "calls itself"

  - check PIC: callstack

////////////////////////////////////////////////////////////////////////////

  *** Khi work với Recursive: 
  - phải có BASE CASE (để recursive function có thể STOP)
  - different input (list càng ngày càng nhỏ)

////////////////////////////////////////////////////////////////////////////

  Giải thích ví dụ dưới: 
    countDonw(9)
    > print 9
    countDonw(8)
    > print 8
    countDonw(7)
    > print 7
    ...
    countDonw(1)
    > print 1
    countDonw(0) >> STOP (đụng base case)
    > print DONE
    


*/

function countDown(num) {
  // (a) Base Case
  if (num <= 0) {
    console.log('DONE')
    return
  }

  console.log(num)

  // (b) Different Input
  num--
  countDown(num)
}

countDown(9)
