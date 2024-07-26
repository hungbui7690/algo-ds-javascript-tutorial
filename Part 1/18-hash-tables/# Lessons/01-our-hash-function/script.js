/*
  Intro 
  - typically known as "Hash Map"
  - objects & Maps in Javascript / dictionaries in Python...
  - store key/value pairs
  - similar to array, but keys are not in ordered
  - unlike array, hash tables are fast for these operations:
    + finding values
    + adding new values
    + remove values


*******************
  Hash Tables
  - Imagine we want to store some colors
  - We could just use an array: ["#ff69b4", "#ff4500", #00ffff]
  - It is not super readable. What do these colors correspond to? 
  - It would be nice if instead using indices to access the colors, we could use more human-readable keys 

    + pink => #ff69b4    
    + orangered => #ff4500
    + cyan => #00ffff

  - colors["cyan"] is way better than color[2]


*******************
  The Hash Part 
  - To implement hash table, we will be using an array 
  - In order to lookup values by key, we need to way to convert keys into valid array indices
  - A function that performs this task is called a "hash function"

        ["cyan", "#00ffff"]
                 ↓ 
    [0   1   2   3   4   5   6   7   8   9]
     ↑                           ↑
["pink", "#ff69b4"]         ["orangered", "#ff4500"]

    + pink => 0
    + orangered => 3
    + cyan => 7


*******************
  What Makes a Good Hash
  - Fast (i.e constant time)
  - Doesn't cluster outputs at specific indices, but distributes uniformly
    => we want as random as possible => because it is array, we want to generate index that fill the array
  - Deterministic (same input yields same output)


*******************
  Hash Function
  - receive arbitrary # of data => return "fixed" value
  - one way => with fixed value, we cannot get the inputs
  - python => hash("hello!") => -62423971764934597
  - hash(str, 100): our array contains 100 items -> return index from 0 to 99
  - hash(str, 9): our array contains 9 items => return index from 0 to 8
    => use charCodeAt(): 96
    => after that, use modulo

\\\\\\\\\\\\\\
  "a".charCodeAt(0)       => 97
  "hi".charCodeAt(0)      => 104 
  "hi".charCodeAt(1)      => 105
  "a".charCodeAt(0) - 96  => 1
  "d".charCodeAt(0) - 96  => 4
  "z".charCodeAt(0) - 96  => 26


\\\\\\\\\\\\\\
  - We have an empty array with <length===11>
        0   1   2   3   4   5   6   7   8   9   10
      +--------------------------------------------+
      |   |   |   |   |   |   |   |   |   |   |    |
      +--------------------------------------------+
  - We want to decide which cell should we use to store "hello"


    Step 1: find the total 
      "hello".charCodeAt(0) - 96    => 8
      "hello".charCodeAt(1) - 96    => 5
      "hello".charCodeAt(2) - 96    => 11
      "hello".charCodeAt(3) - 96    => 11
      "hello".charCodeAt(4) - 96    => 14
      => total = 49

    Step 2: get the index
    - When we module 11 (the length of the array we want to store "hello"), always return 0 to 10
      => total % length = 8
      => this is the cell we want to store "hello-world"

*/

function hash(key, len) {
  let total = 0
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96 // check above
    total = (total + value) % len
  }

  return total
}

console.log(hash('blue', 10)) // 0
console.log(hash('cyan', 10)) // 3
console.log(hash('purple', 10)) // 8
console.log(hash('maroon', 10)) // 6
console.log(hash('orangered', 10)) // 7
console.log(hash('pink', 10)) // 0
