'use strict'
/*
  Remove Vertex
  - must find and remove connection (edge) first
  - then remove vertex


****************
  - Demo: 
      adjacencyList = {
        "Tokyo" : ["Dallas"],
        "Dallas" : ["Tokyo", "Aspen"],
        "Aspen" : ["Dallas"]
      }


  - removeVertex("Dallas")
    + Step 1: go to "Dallas" => then pop the last value = Aspen

        adjacencyList = {
          "Tokyo" : ["Dallas"],
          "Dallas" : ["Tokyo"],
          "Aspen" : []
        }


    + Step 2: call removeEdge("Dallas", "Aspen")

        adjacencyList = {
          "Tokyo" : ["Dallas"],
          "Dallas" : ["Tokyo"],
          "Aspen" : []
        }


    + Step 3: continue to pop from "Dallas" => "Tokyo"

        adjacencyList = {
          "Tokyo" : ["Dallas"],
          "Dallas" : [],
          "Aspen" : []
        }


    + Step 4: call removeEdge("Dallas", "Tokyo")

        adjacencyList = {
          "Tokyo" : [],
          "Dallas" : [],
          "Aspen" : []
        }


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

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop()
      this.removeEdge(vertex, adjacentVertex)
    }

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

graph.removeVertex('Hongkong')
graph.removeVertex('Aspen')

console.log(graph)
