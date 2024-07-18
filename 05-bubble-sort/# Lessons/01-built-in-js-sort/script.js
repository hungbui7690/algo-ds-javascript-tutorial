/*
  Sort Algo Animations: 
  > https://www.toptal.com/developers/sorting-algorithms
  > vào đây sẽ biết tuỳ theo data nào mà nên sử dụng sort nào

//////////////////////////////////////////////////////////////////  

  Built in Javascript Sort Method: 
  - PIC
  - khi work với string thì ok 
  - nhưng khi work với number thì cần có callback fn (comparator function) 


  */
'use strict'

/////////////////////////////////////////////////////////
// number descending

function numberCompare(num1, num2) {
  return num2 - num1
}

console.log([4, 3, 1, 6, 2, 13, 21, 99, 33].sort(numberCompare))

/////////////////////////////////////////////////////////
// default of string

console.log(
  [
    'Alabama',
    'Indiana',
    'Connecticut',
    'California',
    'North Carolina',
    'Iowa',
    'Kansas',
  ].sort()
)

/////////////////////////////////////////////////////////
// compare by string length

const compareByLen = (str1, str2) => {
  return str1.length - str2.length
}
console.log(
  [
    'Alabama',
    'Indiana',
    'Connecticut',
    'California',
    'North Carolina',
    'Iowa',
    'Kansas',
  ].sort(compareByLen)
)
