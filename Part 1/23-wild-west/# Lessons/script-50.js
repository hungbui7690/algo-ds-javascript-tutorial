/*
  Trie Exercise - getWords
  - Write a function on the Trie.prototype called getWords which returns an array of all of the words in the Trie.

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
  getWords(words = [], currentWord = '') {}
}

var t = new Trie()
t.addWord('fun')
t.addWord('fast')
t.addWord('fat')
t.addWord('fate')
t.addWord('father')
t.addWord('forget')
t.addWord('awesome')
t.addWord('argue')

t.getWords() // ["fun", "fast", "fat", "fate", "father", "forget", "awesome", "argue"]

t.getWords().length // 8
