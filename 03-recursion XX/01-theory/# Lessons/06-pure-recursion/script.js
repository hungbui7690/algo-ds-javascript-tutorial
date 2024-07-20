/*
  PURE RECURSION
  - without helper function, we will work on the previous lesson 


  newArr = newArr.concat(collectOddValues(arr.slice(1)))
    > [1].concat(collectOddValues([2,3,4,5]))
      > [].concat(collectOddValues([3,4,5]))
        > [3].concat(collectOddValues([4,5]))
          > [].concat(collectOddValues([5]))
            > [5].concat(collectOddValues([]))
              = [5].concat([])
              = [5]

          > [5]
        > [3].concat([5]) = [3,5]
      > [].concat([3,5]) = [3,5]
    > [1].concat([3,5]) = [1,3,5]

////////////////////////////////////////////////////////////////////////////

*/

const collectOddValues = (arr) => {
  let newArr = [] // this array will be initialized every execution

  if (arr.length === 0) return newArr // base

  if (arr.length % 2 !== 0) newArr.push(arr[0])

  newArr = newArr.concat(collectOddValues(arr.slice(1)))

  return newArr
}

console.log(collectOddValues([1, 2, 3, 4, 5]))
