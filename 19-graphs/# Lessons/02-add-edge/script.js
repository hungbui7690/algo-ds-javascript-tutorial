'use strict'
/*

//////////////////////////////////////////////////////

  ADD EDGE 
  - check PIC

*/

class Graph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    return this.adjacencyList[vertex]
  }

  // (1) chưa cần check, chưa cần handle err
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2)
    this.adjacencyList[v2].push(v1)
  }
}

const graph = new Graph()
graph.addVertex('Tokyo')
graph.addVertex('Dallas')
graph.addVertex('Aspen')
graph.addVertex('Seoul')

// (2)
graph.addEdge('Tokyo', 'Dallas')
graph.addEdge('Dallas', 'Aspen')

console.log(graph)
