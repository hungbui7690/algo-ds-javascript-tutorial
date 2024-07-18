'use strict'
/*

//////////////////////////////////////////////////////

  DIJKSTRA'S ALGORITHMS - INTRO
  - REQUIREMENT: phải hiểu rõ Graph và Priority Queue
  - hiện tại graph của chúng ta chưa có weighted, nên khó thể measure >> phải biến thành Weighted Graph

  WEIGHTED GRAPH
  - bên dưới
*/

// (1)
class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    return this.adjacencyList[vertex]
  }

  // (***) ở trên y chang, tới chỗ này sẽ khác vì có thêm weight
  addEdge(vertex1, vertex2, weight) {
    // (***) lúc này phải store vào object
    this.adjacencyList[vertex1].push({
      node: vertex2,
      weight,
    })
    this.adjacencyList[vertex2].push({
      node: vertex1,
      weight,
    })
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2)
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1)
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacenVertex = this.adjacencyList[vertex].pop()
      this.removeEdge(vertex, adjacenVertex)
    }
    delete this.adjacencyList[vertex]
  }
}

const weightedGraph = new WeightedGraph()
weightedGraph.addVertex('A')
weightedGraph.addVertex('B')
weightedGraph.addVertex('C')

// (***)
weightedGraph.addEdge('A', 'B', 9)
weightedGraph.addEdge('A', 'C', 5)
weightedGraph.addEdge('B', 'C', 7)

console.log(weightedGraph)
