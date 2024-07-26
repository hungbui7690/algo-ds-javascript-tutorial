/*
  Remove Edge
  - Demo: 
      adjacencyList = {
        "Tokyo" : ["Dallas"],
        "Dallas" : ["Tokyo"],
      }

      (Tokyo) <-> (Dallas)


  - removeEdge('Tokyo', 'Dallas')
      adjacencyList = {
        "Tokyo" : [],
        "Dallas" : []
      }

      (Tokyo)   (Dallas)
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
}

const graph = new Graph()
graph.addVertex('Tokyo')
graph.addVertex('Dallas')
graph.addVertex('Aspen')
graph.addVertex('Seoul')

graph.addEdge('Tokyo', 'Dallas')
graph.addEdge('Dallas', 'Aspen')

graph.removeEdge('Tokyo', 'Dallas')
console.log(graph)
