/*
  Hash Collisions
  - 2 types: 
    + Separated Chaining
    + Linear Probing
  - pic


  ********************
  Set 
  - using Separated Chaining Demo
  - we have an empty array with 10 cells

        0   1   2   3   4   5   6   7   8   9
      [                                       ]

  ++++++++++
  Step 1: hash => darkblue = 4

  ++++++++++
  Step 2: check if that cell is "null" or "undefined" or not => not exist, create a new array there

        0   1   2   3   4   5   6   7   8   9
      [                                       ]
                        ↑
                      [   ]

  ++++++++++
  Step 3: push the pair there

        0   1   2   3   4   5   6   7   8   9
      [                                       ]
                        ↑
            [["darkblue", "#00008b"]]

  ++++++++++
  Step 4: do the same if we want to add another pair

        0   1   2   3   4   5   6   7   8   9
      [                                       ]
                        ↑
                    [["darkblue", "#00008b"]
                      ["salmon", "#fa8072"]]
*/

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size)
  }
  _hash(key) {
    let total = 0
    let WEIRD_PRIME = 31
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length
    }
    return total
  }
  set(key, value) {
    // 1. hash to get the index
    let index = this._hash(key)

    // 2. if the cell doesn't have anything
    if (!this.keyMap[index]) {
      this.keyMap[index] = [] // create new array in this cell
    }

    // 3. push new pair to the new array
    this.keyMap[index].push([key, value])
  }
}

let ht = new HashTable(17)
ht.set('maroon', '#800000')
ht.set('yellow', '#FFFF00')
ht.set('olive', '#808000')
ht.set('salmon', '#FA8072')
ht.set('lightcoral', '#F08080')
ht.set('mediumvioletred', '#C71585')
ht.set('plum', '#DDA0DD')

console.log(ht)
