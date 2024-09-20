/*
  3. Longest Substring Without Repeating Characters
  - Given a string s, find the length of the longest substring without repeating characters.


******************************

  Example 1:
    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.


  Example 2:
    Input: s = "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.
  
  Example 3:
    Input: s = "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3.
    Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
  

******************************

  Constraints:

  0 <= s.length <= 5 * 104
  s consists of English letters, digits, symbols and spaces.


******************************

  Solution 1: Brute Force
  - Time/Space Complexity Analysis
  - Time Complexity: O(n³). Two nested loops is O(n²), and the helper function makes an additional nested loop.
  - Space Complexity: O(min(n, m)), where n is the length of the string s and m is the size of the character set.

  s = [abcabcbb]

  **************
  [<ab> c a b c b b]   -> hasDuplication(0, 1) -> false
  [<abc> a b c b b] -> false
  [<abca> b c b b] -> <true>
  **************
  [a <bca> b c b b] -> false
  [a <bcab> c b b] -> <true>
  **************
  [a b <cab> c b b] -> false
  [a b <cabc> b b] -> <true>
  **************
  [a b c <abc> b b] -> false
  [a b c <abcab> b] -> <true>
  **************
  [a b c a <bca> b] -> false
  [a b c a <bcab> b] -> <true>
  **************
  [a b c a b <cab> b] -> false
  [a b c a b <cabc> b] -> <true>
  **************
  [a b c a b c <abc> b] -> false
  [a b c a b c <abcb>] -> <true>
  **************
  [a b c a b c a<bcb>] -> <true>
  **************
  [a b c a b c ab<cb>] -> <true>


*/

'use strict'

function hasDuplication(str) {
  const set = new Set(str)
  if (set.size === str.length) return false
  return true
}

function lengthOfLongestUniqueSubstring(input) {
  let max = 0

  if (input.length === 0) return max
  if (input.length === 1) return 1

  let j = 0
  for (let i = 0; i < input.length; i++) {
    for (j = i + 1; j < input.length; j++) {
      // console.log(i, j, input.slice(i, j), hasDuplication(input.slice(i, j)))
      if (!hasDuplication(input.slice(i, j))) max = Math.max(max, j - i)
      else break
    }
  }

  return max
}

// const s = 'pwwkew' // 3
// const s = 'abcabcbb' // 3
// const s = 'bbbbb' // 1
// const s = 'kadbakfagh' // 5
// const s = '' // 0
const s = 'a' // 1
console.log(lengthOfLongestUniqueSubstring(s))
