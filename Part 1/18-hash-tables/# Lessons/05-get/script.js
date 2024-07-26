/*
  Get
  - Get("salmon")
                        [["darkblue", "#00008b"]
                          ["salmon", "#fa8072"]]
                    index     ↑
              0   1   2   3   4   5   6   7   8   9
  keyMap =  [                                       ]


*********
  Step 1: get index => _hash(darkblue) => return 4

  => keyMap[4] = 

*********
  Step 2: check if that cell has value => loop through the array => check the key 
  - this.keyMap[index][i] === [["darkblue", "#00008b"]
                            ["salmon", "#fa8072"]]

  - this.keyMap[index][0] === ["darkblue", "#00008b"]
  - this.keyMap[index][1] === ["salmon", "#fa8072"]

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
    let index = this._hash(key)

    if (!this.keyMap[index]) {
      this.keyMap[index] = []
    }

    this.keyMap[index].push([key, value])
  }
  get(key) {
    let index = this._hash(key)
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1]
        }
      }
    }
    return undefined
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

console.log(ht.get('maroon'))
console.log(ht.get('salmon'))
