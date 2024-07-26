/*
  Intro
  - used widely: 
    + social networking
    + netflix recommended films
    + ...

******************
  Graph Usage
  - pic
  > https://musicmap.info/

******************

  Types of Graphs
  - terminology
  - pic

******************
  Storing Graphs - Adjacency Matrix
  - pic

******************
  Adjacency List
  - pic

******************
  BIG-O
  - pic

******************
  Add Vertex
  - pic
  - add vertex to adjacency list
  - each vertex is key-value pair

******************
  Demo: graph.addVertex("tokyo") 
  => add to adjacencyList={}
  
  - Check if adjacencyList contains that vertex or not 
    + If vertex not in adjacencyList => create key-value pair => then return that vertex

        adjacencyList = {
          "tokyo" : []
        }

  - Because we return existed vertex => we can use chaining 
      graph.addVertex('Tokyo').push('food')

        ['food']

*/

class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    // check if vertex exists or not
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []

    return this.adjacencyList[vertex]
  }
}

const graph = new Graph()
graph.addVertex('Tokyo').push('food')
graph.addVertex('Seoul')
console.log(graph.addVertex('Tokyo')) // not overwrite the prev one

console.log(graph)
