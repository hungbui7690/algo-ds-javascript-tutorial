'use strict'
/*

//////////////////////////////////////////////////////

  REMOVE VERTEX
  - phải tìm ra và remove connection (edge) trước 
  - rồi sau đó mới remove vertex



*/

class Graph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    return this.adjacencyList[vertex]
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2)
    this.adjacencyList[v2].push(v1)
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2)
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1)
  }

  // (1)
  removeVertex(vertex) {
    // (***) (a) xoá hết connections
    while (this.adjacencyList[vertex].length) {
      const adjacenVertex = this.adjacencyList[vertex].pop()
      this.removeEdge(vertex, adjacenVertex)
    }
    // (b) xoá vertex
    delete this.adjacencyList[vertex]
  }
}

const graph = new Graph()
graph.addVertex('Tokyo')
graph.addVertex('Dallas')
graph.addVertex('Aspen')
graph.addVertex('Seoul')
graph.addVertex('Los Angeles')
graph.addVertex('Hongkong')

graph.addEdge('Tokyo', 'Dallas')
graph.addEdge('Dallas', 'Aspen')
graph.addEdge('Hongkong', 'Tokyo')
graph.addEdge('Hongkong', 'Dallas')
graph.addEdge('Los Angeles', 'Hongkong')
graph.addEdge('Los Angeles', 'Aspen')

// (2)
graph.removeVertex('Hongkong')
graph.removeVertex('Aspen')

console.log(graph)
