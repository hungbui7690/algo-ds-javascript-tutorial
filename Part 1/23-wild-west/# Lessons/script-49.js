/*
  Trie Exercise - findWord
  - Write a function called findWord which accepts a string and returns the characters object for the last character in that word if the string is a word in the Trie, otherwise it returns undefined. Try to solve this without having to find every single word in the Trie. addWord is implement to help you test the function.

*/

class Trie {
  constructor() {
    this.characters = {}
    this.isWord = false
  }
  addWord(word, index = 0) {
    if (index === word.length) {
      this.isWord = true
    } else if (index < word.length) {
      var char = word[index]
      var subTrie = this.characters[char] || new Trie()
      subTrie.addWord(word, index + 1)
      this.characters[char] = subTrie
    }
    return this
  }

  findWord(word, index = 0) {}
}

var t = new Trie()
t.addWord('fun')
t.addWord('fast')
t.addWord('fat')
t.addWord('fate')
t.addWord('father')

t.findWord('taco') // undefined
t.findWord('fat').characters // {t: Trie}
t.findWord('father').characters // {}
t.findWord('father').isWord // true
