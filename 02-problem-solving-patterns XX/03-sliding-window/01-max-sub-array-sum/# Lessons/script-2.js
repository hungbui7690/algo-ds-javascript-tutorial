/*  
	- Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

	- Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

		maxSubarraySum([100,200,300,400], 2) // 700 >> 300 + 400
		maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 >> 4,2,10,23 = 39
		maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5 >> 6, -1
		maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5 >> -2, 7
		maxSubarraySum([2,3], 3) // null

	- Constraints:
		> Time Complexity - O(N)
		> Space Complexity - O(1)


/////////////////////////////////

	- Unlike the previous lesson, which sum by using loop + sliding windows: [1,4,2] > [4,2,10] > [2,10,23]... but we will do the different way 

		[1, 4, 2, 10, 23, 3, 1, 0, 20]

	- First Step:
			let maxSum = 0
			let tempSum = 1 + 4 + 2 = 7 = sum[1 4 2]
			maxSum = 7
	
	- Sum the next 3 sequence:
			tempSum - prev + next = 7 - 1 + 10 = 16 = sum[4 2 10]
			maxSum = 16
			
	- Sum the next 3 sequence:
			tempSum - prev + next = 16 - 4 + 23 = 35 = sum[2 10 23]
			maxSum = 35

	- Sum the next 3 sequence:
			tempSum - prev + next = 35 - 2 + 3 = 36 = sum[10 23 3]
			maxSum = 36

	- Sum the next 3 sequence:
			tempSum - prev + next = 36 - 10 + 1 = 27 = sum[23 3 1]
			maxSum = <36>
	
/////////////////////////////////

	[1, 4, 2, 10, 23, 3, 1, 0, 20]

	sum [1 4 2]
	sum [1 4 2] - 1 + 10 = sum[4,2,10]
	sum [4 2 10] - 4 + 23 = sum[2,10,23]
	...

	- O(n)

*/

function maxSubarraySum(arr, num) {
  let maxSum = 0
  let tempSum = 0

  if (arr.length < num) return null

  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }

  tempSum = maxSum

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }

  return maxSum
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)) // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)) // 39
