/*
  1. Two Sum
  - Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
  - You may assume that each input would have exactly one solution, and you may not use the same element twice.
  - You can return the answer in any order.


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Example 1:
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

  Example 2:
    Input: nums = [3,2,4], target = 6
    Output: [1,2]
    
  Example 3:
    Input: nums = [3,3], target = 6
    Output: [0,1]


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Constraints:
    2 <= nums.length <= 104
    -109 <= nums[i] <= 109
    -109 <= target <= 109
    Only one valid answer exists.


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Solution 2: Hash Table
  - pic
  - We can use object or HashMap to solve this problem
    -> <O(n)>


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  nums = [2, 7, 11, 15]     target = 18
  numToIndex = {}
  complement = null

  Steps: 
  - i = 0 
    complement = target - nums[0] = 18 - 2 = 16
    numToIndex does not contains 24
    numToIndex[2] = 0 -> numToIndex = { 2: 0}

  - i = 1
    complement = target - nums[1] = 18 - 7 = 11
    numToIndex does not contains 11
    numToIndex[7] = 1 -> numToIndex = { 2: 0, 7: 1}

  - i = 2
    complement = target - nums[2] = 18 - 11 = 7
    numToIndex <contains> <7>
    return [numToIndex[7], i] = [1, 2]


*/

'use strict'

// Solution 2:

const twoSum = function (nums, target) {
  // Our hash table that stores at which index the number is at
  const numToIndex = {}
  let complement = null

  // 1. Iterate over every number in the array
  for (let i = 0; i < nums.length; i++) {
    // 2. Calculate the complement that would sum to our target
    complement = target - nums[i]

    // 3. Check if that complement is in our hash table
    if (numToIndex.hasOwnProperty(complement)) {
      return [numToIndex[complement], i]
    }

    // 4. Add the current number to our hash table
    numToIndex[nums[i]] = i
    console.log(numToIndex)
  }
}
console.log(twoSum([2, 7, 11, 15], 18))
// console.log(twoSum([2, 7, 11, 15], 26))
