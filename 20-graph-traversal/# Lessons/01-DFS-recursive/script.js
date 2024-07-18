'use strict'
/*

//////////////////////////////////////////////////////

  TRAVERSE - INTRO

  DEPTH FIRST GRAPH TRAVERSAL
  - Check PIC để hiểu rõ cách di chuyển 
  - Chúng ta sẽ làm với Recursive và Iterative
    
  DFS RECURSIVE


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
      const adjacenVertex = this.adjacencyList[vertex].pop()
      this.removeEdge(vertex, adjacenVertex)
    }
    delete this.adjacencyList[vertex]
  }

  // (1)
  depthFirstRecursive(v) {
    // (a)
    const results = []
    const visited = {}

    // (b)
    const DFS = (vertex) => {
      // (**) base condition
      if (!vertex) return

      // (**)
      if (!visited[vertex]) {
        // (i) nếu chưa visit, thì thêm vào list và set đã visit
        visited[vertex] = true
        results.push(vertex)

        // (ii) lấy ra neigbors và gọi lại traverse
        const neighbors = this.adjacencyList[vertex]
        neighbors.forEach((v) => {
          DFS(v)
        })
      }
    }

    // (c)
    DFS(v)

    // (d)
    return results
  }
}

const graph = new Graph()
// (***) tạo ra graph structure giống như hình
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'D')
graph.addEdge('C', 'E')
graph.addEdge('D', 'E')
graph.addEdge('D', 'F')
graph.addEdge('E', 'F')

/*
        A
      /   \  
     B     C 
     |     |
     D --- E
     \     /
        F
*/

console.log(graph)

// (2)
console.log(graph.depthFirstRecursive('A'))
