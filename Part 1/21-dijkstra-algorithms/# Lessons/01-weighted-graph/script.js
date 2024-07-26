'use strict'
/*
  Dijkstra's Algorithms - Intro
  - requirement: must understand Graph & Priority Queue
  - now, our graph does not have weighted, so it's hard to measure 
    => must change to Weighted Graph


*/

class WeightedGraph {
  constructor() {
    this.adjList = {}
  }

  /* 
  adjList = {
      "A": [
        {node : B, weight : 4},
        {node : C, weight : 2}
      ]
      "B" : [
        {node : A, weight : 4},
      ],
      "C" : [
        {node : A, weight : 2},
      ]
  }
*/

  addVertex(vertex) {
    if (!this.adjList[vertex]) this.adjList[vertex] = []
    return this.adjList[vertex]
  }

  // # add weight
  addEdge(vertex1, vertex2, weight) {
    this.adjList[vertex1].push({
      node: vertex2,
      weight, // #
    })
    this.adjList[vertex2].push({
      node: vertex1,
      weight, // #
    })
  }
  removeEdge(v1, v2) {
    this.adjList[v1] = this.adjList[v1].filter((v) => v !== v2)
    this.adjList[v2] = this.adjList[v2].filter((v) => v !== v1)
  }
  removeVertex(vertex) {
    while (this.adjList[vertex].length) {
      const adjVertex = this.adjList[vertex].pop()
      this.removeEdge(vertex, adjVertex)
    }
    delete this.adjList[vertex]
  }
}

const weightedGraph = new WeightedGraph()
weightedGraph.addVertex('A')
weightedGraph.addVertex('B')
weightedGraph.addVertex('C')

weightedGraph.addEdge('A', 'B', 9)
weightedGraph.addEdge('A', 'C', 5)
weightedGraph.addEdge('B', 'C', 7)

console.log(weightedGraph)
