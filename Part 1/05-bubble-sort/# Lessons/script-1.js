/*
  Sort Algo Animations: 
  - https://www.toptal.com/developers/sorting-algorithms
    > In this link, we will know which kind of sort to use depends on each kind to data


  +++++++++++++++
  Built in Javascript Sort Method: 
  - pic
  - it's ok when working with string
    > but when working with number, we need to pass callback fn (comparator function)

  */
'use strict'

// number descending
console.log([4, 3, 1, 6, 2, 13, 21, 99, 33].sort((num1, num2) => num2 - num1))

// default of string
const states = [
  'Alabama',
  'Indiana',
  'Connecticut',
  'California',
  'North Carolina',
  'Iowa',
  'Kansas',
]
console.log(states.sort())

// sort by string length
console.log(
  [
    'Alabama',
    'Indiana',
    'Connecticut',
    'California',
    'North Carolina',
    'Iowa',
    'Kansas',
  ].sort((str1, str2) => str1.length - str2.length)
)
