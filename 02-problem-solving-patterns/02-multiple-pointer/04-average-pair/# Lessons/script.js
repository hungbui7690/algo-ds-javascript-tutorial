/*
  - Write a function called averagePair. Given a <SORTED> array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.


  - Bonus Constraints:
    > Time: O(N)
    > Space: O(1)


  - Sample Input:
    > averagePair([1,2,3],2.5) -> true
    > averagePair([1,3,3,5,6,7,10,12,19],8) -> true
    > averagePair([-1,0,3,4,5,6], 4.1) -> false
    > averagePair([],4) -> false


  - Check if the array has a pair which = 8 
  
       i
      [1 3 3 5 6 7 10 12 19]   
                          j
      - average = (1 + 19) / 2 = 10 > 8 => move j to the left

       i
      [1,3,3,5,6,7,10,12,19]   
                      j
      - average = 6.5 < 8: => move i to the right

         i
      [1,3,3,5,6,7,10,12,19]     
                      j
      - average = 7.5 < 8: => move i to the right

           i
      [1,3,3,5,6,7,10,12,19]     
                      j
      - average = 8.5 > 8: => move j to the left

           i
      [1,3,3,5,6,7,10,12,19]     
                   j
      - average = 6.5 < 8: => move i to the right

             i
      [1,3,3,5,6,7,10,12,19]     
                   j
      - average = 7.5 < 8: => move i to the right

               i
      [1,3,3,5,6,7,10,12,19]     
                   j
      - average = 8 === 8

      => return True


*/

const averagePair = (arr, val) => {
  if (arr.length === 0) return false

  let left = 0
  let right = arr.length - 1

  while (left < right) {
    let average = (arr[left] + arr[right]) / 2

    if (average === val) return true
    if (average > val) right--
    else left++
  }
  return false
}

console.log(averagePair([1, 2, 3], 2.5)) // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)) // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)) // false
console.log(averagePair([], 4)) // false
