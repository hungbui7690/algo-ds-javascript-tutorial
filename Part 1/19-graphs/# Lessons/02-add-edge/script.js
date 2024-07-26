'use strict'
/*
  Add Edge
  - pic


*****************
  Demo: In the graph, we have these vertexes
  - adjacencyList = {
      "Tokyo" : [],
      "Dallas" : [],
      "Aspen" : [],
    }

      (Tokyo)   (Dallas)    (Aspen)


  ++++++++++
  - addEdge(v1, v2) = add("Tokyo", "Dallas") 
    => when we add edge to these vertex => Both vertexes will contain each other

      adjacencyList = {
        "Tokyo" : ["Dallas"],
        "Dallas" : ["Tokyo"],
        "Aspen" : [],
      }

      (Tokyo) <-> (Dallas)    (Aspen)


  - add("Dallas", "Aspen")

      adjacencyList = {
        "Tokyo" : ["Dallas"],
        "Dallas" : ["Tokyo", "Aspen"],
        "Aspen" : ["Dallas"]
      }

      (Tokyo) <-> (Dallas) <-> (Aspen)

*/

class Graph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    return this.adjacencyList[vertex]
  }

  // no need to check for existance => no need to handle error
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

graph.addEdge('Tokyo', 'Dallas')
graph.addEdge('Dallas', 'Aspen')

console.log(graph)
