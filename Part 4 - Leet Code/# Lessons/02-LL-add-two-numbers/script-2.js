/*
  2. Add Two Numbers
  - You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
  - You may assume the two numbers do not contain any leading zero, except the number 0 itself.


****************************

  Example 1: 
    Input: l1 = [2,4,3], l2 = [5,6,4]
      l1  2 -> 4 -> 3   342
      l2  5 -> 6 -> 4   465
    Output: [7,0,8]
    Explanation: 342 + 465 = 807.

  Example 2:
    Input: l1 = [0], l2 = [0]
    Output: [0]  

  Example 3:
    Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
    Output: [8,9,9,9,0,0,0,1] = 10,009,998


****************************

  l1 = [2 4 3]
  l2 = [5 6 4]
  
  -> 2 + 5 = <7> 
  -> 4 + 6 = 10 -> <0> carry 1
  -> 3 + 4 = 7 + carry = 7 + 1 = <8>


*/

'use strict'

//  Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  // create a new ListNode to store the sum of l1 and l2
  let sumList = new ListNode(0)
  // create a pointer to keep track of the current position in the sumList
  let current = sumList
  // create a carry variable to keep track of the carry over from addition
  let carry = 0 // # pic

  while (l1 !== null || l2 !== null) {
    let sum = 0

    if (l1 !== null) {
      sum += l1.val
      l1 = l1.next
    }

    if (l2 !== null) {
      sum += l2.val
      l2 = l2.next
    }

    sum += carry

    carry = Math.floor(sum / 10)

    // create a new ListNode with value sum % 10 and add it to the sumList
    current.next = new ListNode(sum % 10)
    current = current.next
  }

  if (carry !== 0) {
    current.next = new ListNode(carry)
  }

  return sumList.next
}

const l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)))

const sum = addTwoNumbers(l1, l2)
console.log(sum)
