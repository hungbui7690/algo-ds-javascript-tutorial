'use strict'
/*

//////////////////////////////////////////////////////

  GRAPHS - INTRO
  - sử dụng rộng rãi: 
    + social network
    + netflix recommend fim 
    + ...

///////////////////////////////////////////////

  USAGE
  - PIC
  > https://musicmap.info/

///////////////////////////////////////////////

  TYPES OF GRAPHS
  - PIC (check kỹ)

///////////////////////////////////////////////

  STORING GRAPHS ADJACENCY MATRIX
  - PIC

  ADJACENCY LIST
  - PIC

  BIG-O
  - PIC

///////////////////////////////////////////////

  ADD VERTEX
  - PIC

  - cấu trúc graph: mỗi vertex là key:value pair

  this.adjacencyList = {
    "tokyo" : [],
    "seoul" : []
  }

*/

// (1)
class Graph {
  // (a)
  constructor() {
    this.adjacencyList = {}
  }

  // (b)
  addVertex(vertex) {
    // (***)  !this.adjacencyList[vertex] chứ ko phải !this.adjacencyList >> check xem vertex đó đã có hay chưa
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []

    return this.adjacencyList[vertex]
  }
}

// (2)
const graph = new Graph()
graph.addVertex('Tokyo').push('food')
graph.addVertex('Seoul')
graph.addVertex('Tokyo') // ko overwrite thằng trước đó

console.log(graph)
