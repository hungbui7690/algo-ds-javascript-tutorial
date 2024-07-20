/*  
	- Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

	- Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

			maxSubarraySum([100,200,300,400], 2) -> 700 = 300 + 400
			maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) -> 39 = 4,2,10,23 
			maxSubarraySum([-3,4,0,-2,6,-1], 2) -> 5 = 6, -1
			maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) -> 5 = -2, 7
			maxSubarraySum([2,3], 3) -> null



	- Constraints:
		> Time Complexity - O(N)
		> Space Complexity - O(1)



		- max = 0
		- i starts at index 0
		- j starts at index 2
		- 1 + 4 + 2 = 7 > 0 => max = 7
		 i 
		[1  4  2  10  23  3  1  0  20]
					    j


		- slide the windows: i++ & j++
		- 4 + 2 + 10 = 16 > 7 => max = 16
			 	 i 
		[1  4  2  10  23  3  1  0  20]
	     					 	j


		- 2 + 10 + 23 = 35 > 16 => max = 35
					 	  i 
		[1  4  2  10  23  3  1  0  20]
	     					 	   j

		- 10 + 23 + 3 = 33 < 35 => max = 37
					 	      i 
		[1  4  2  10  23  3  1  0  20]
	     					 	       j
		....
		....

		> [1 4 2] > [4 2 10] > [2 10 23] > [10 23 3] > [2 10 23] > [10 23 3] > [23 3 1] > [3 1 0] > [1 0 20]

	- O(n^2): if there are multiple items in array, and if we want to sum multiple (20, 30) numbers at the same time > it will take a lot of time to run
	
*/

function maxSubarraySum(arr, num) {
  if (num > arr.length) return null

  let max = -Infinity

  // ([1, 2, 3, 4], 3): use this condition because we don't want to get out of length of the array > i must be less than 2, means index = 1
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0
    for (let j = 0; j < num; j++) {
      temp += arr[i + j]
    }
    if (temp > max) {
      max = temp
    }
  }

  return max
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)) // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)) // 39
