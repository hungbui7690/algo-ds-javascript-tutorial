/*
  Trie Exercise - removeWord
  - Write a function called removeWord which accepts a string and removes the word from the Trie. addWord is implemented to help you test the function.

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

  findWord(word, index = 0) {
    // This function will return the node in the trie
    // which corresponds to the end of the passed in word.

    // Be sure to consider what happens if the word is not in this Trie.

    var char = word[index]
    if (index < word.length - 1 && this.characters[char]) {
      index += 1
      return this.characters[char].findWord(word, index)
    } else {
      return this.characters[char]
    }
  }
  getWords(words = [], currentWord = '') {
    // This function will return all the words which are
    // contained in this Trie.
    // it will use currentWord as a prefix,
    // since a Trie doesn't know about its parents.

    if (this.isWord) {
      words.push(currentWord)
    }
    for (var char in this.characters) {
      var nextWord = currentWord + char
      this.characters[char].getWords(words, nextWord)
    }
    return words
  }
  autoComplete(prefix) {
    // This function will return all completions
    // for a given prefix.
    // It should use findWord and getWords.
    var subTrie = this.findWord(prefix)
    if (subTrie) {
      return subTrie.getWords([], prefix)
    } else {
      return []
    }
  }
  removeWord(word) {}
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

t.removeWord('fat')
t.characters.f.characters.a.characters.t.isWord // false
