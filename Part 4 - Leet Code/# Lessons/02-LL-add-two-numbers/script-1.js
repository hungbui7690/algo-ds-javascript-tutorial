/*
  2. Add Two Numbers
  - You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
  - You may assume the two numbers do not contain any leading zero, except the number 0 itself.

  

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


*******************************


*/

'use strict'

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }
  push(val) {
    const newNode = new ListNode(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }
  traverse() {
    let result = ''
    let current = this.head

    while (current) {
      result = current.val + result
      current = current.next
    }
    return result
  }
}

const l1 = new SinglyLinkedList()
l1.push(2)
l1.push(4)
l1.push(3)
const num1 = +l1.traverse()

const l2 = new SinglyLinkedList()
l2.push(5)
l2.push(6)
l2.push(4)
const num2 = +l2.traverse()

const result = num1 + num2
console.log(result.toString().split('').reverse())
