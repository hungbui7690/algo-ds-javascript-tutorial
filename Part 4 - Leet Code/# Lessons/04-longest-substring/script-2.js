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

  Solution 1: Sliding Window
  s   = [abcabcbb]
  max = 0

  **************

  [<ka> d b a k f a g h] -> hasDuplication(0, 1) -> false
  [<kad> b a k f a g h] -> false
  [<kadb> a k f a g h] -> false -> max = <4>
  [<kadba> k f a g h] -> <true> 
    
  **************

  [k <adba> k f a g h] -> <true>

  **************

  [k a <dbak> f a g h] -> false
  [k a <dbakf> a g h] -> false -> max = <5>
  [k a <dbakfa> g h] -> <true>

  **************

  [k a d <bakfa> g h] -> <true>

  **************

  [k a d b <akfag> h] -> <true>

  **************

  [k a d b a <kfagh>] -> false

  => max = <5>


*/

'use strict'

function hasDuplication(str) {
  const set = new Set(str)
  if (set.size === str.length) return false
  return true
}

function lengthOfLongestUniqueSubstring(input) {
  let max = 0
  let l = 0
  let r = 1

  if (input.length === 0) return max
  if (input.length === 1) return 1

  while (r < input.length) {
    if (!hasDuplication(input.slice(l, r))) {
      max = Math.max(max, r - l)
      r++
    } else l++
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
