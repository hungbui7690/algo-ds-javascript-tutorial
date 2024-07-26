/*
  Graphs Exercise - addVertex
  - Implement the following methods on the Graph class

      addVertex- this function should add a node to the graph and place a new key in the adjacency list with the value of an empty array.

*/

class Graph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {}
}

var graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.adjacencyList['A'] // []
graph.adjacencyList['B'] // []
graph.adjacencyList['C'] // []
