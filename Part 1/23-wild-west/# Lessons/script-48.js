/*
  Trie Exercise - addWord
  - This function should add the given word starting from the given index to the Trie.
  - It will be recursive and notify the correct child of this Trie to add the word starting from a later index.
  - Consider what the add function should do when it reaches the end of the word as a word does not necessarily end at a leaf.
  - You must mark nodes which are the ends of words so that the words can be reconstructed later.

*/

class Trie {
  constructor() {
    this.characters = {}
    this.isWord = false
  }
  addWord(word, index = 0) {}
}

var firstTrie = new Trie()
firstTrie.addWord('fun')
firstTrie.characters // {f: Trie}
!!firstTrie.characters['f'] // true

firstTrie.characters.f.characters.u // {u: Trie}
!!firstTrie.characters.f.characters.u // true

firstTrie.characters.f.characters.u.characters.n.isWord // true
!!firstTrie.characters.f.characters.u.characters.n // true
!!firstTrie.characters.f.characters.u.characters.n.characters // {}

!!firstTrie.characters.f.characters.u.characters.l // true

var secondTrie = new Trie()
secondTrie.addWord('ha')
secondTrie.addWord('hat')
secondTrie.addWord('has')
secondTrie.addWord('have')
secondTrie.addWord('hate')

secondTrie.characters.h.characters.a.isWord // true
secondTrie.characters.h.characters.a.characters.t.isWord // true
secondTrie.characters.h.characters.a.characters.v.isWord // false
secondTrie.characters.h.characters.a.characters.v.characters.e.isWord // true
secondTrie.characters.h.characters.a.characters.t.characters.e.isWord // true

Object.keys(secondTrie.characters.h.characters.a.characters).length // 3
