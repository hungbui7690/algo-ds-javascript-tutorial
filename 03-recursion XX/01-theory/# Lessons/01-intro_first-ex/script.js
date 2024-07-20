/*
  Wizard gives Martin a task: 
  - check in the array that has the odd number or not (in fact, Martin is so young, so he doesn't know => he just can ask)
    [2,4,6,8,10]

  - Martin go and ask the Angry Dragon, but Dragon says that it just can tell Martin the result of the 1st number in the list
  - So, Martin ask it to check the 1st number: 

      [[2],4,6,8,10] => even
      [[4],6,8,10] => even
      [[6],8,10] => even
      [[8],10] => even
      [10] => even
      [] => no number => cannot check

  - Martin checks again: 

      [] => NO ODD
      [10] => NO ODD
      [[8],10] => NO ODD
      [[6],8,10] => NO ODD
      [[4],6,8,10] => NO ODD
      [[2],4,6,8,10] => NO ODD
  
  => Conclusion: there's no odd number => This is Recursion: list will become small, and STOP when meets condition

////////////////////////////////

  WHAT IS RECURSION
  - a function that "calls itself"
  - pic: callstack


  BASE CASE
  - when working with Recursion:
    + must have base case (so that recursive function can stop)
    + different input (list will become smaller)

  - Explain the following example:
    + countDown(9)
      > print(9)
    + countDown(8)
      > print(8)
    + countDown(7)
      > print(7)
    + countDown(6)
      > print(6)
      ...
    + countDown(2)
      > print(2)
    + countDown(1)
      > print(1)
    + countDown(0) => STOP (meet the base case)
      > print(DONE)

*/

function countDown(num) {
  // BASE CASE
  if (num <= 0) {
    console.log('DONE')
    return
  }

  console.log(num)

  // DIFFERENT INPUT
  num--
  countDown(num)
}

countDown(9)
