'use strict'
/*

//////////////////////////////////////////////////////

  DEPTH FIRST ITERATIVE
  - bài này khó >> check PIC
  - qua bài này sẽ thấy, làm đc bằng recusive >> muốn sang iterative và keep track thì sử dụng stack
  
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
  depthFirstRecursive(v) {
    const results = []
    const visited = {}
    const DFS = (vertex) => {
      if (!vertex) return
      if (!visited[vertex]) {
        visited[vertex] = true
        results.push(vertex)

        const neighbors = this.adjacencyList[vertex]
        neighbors.forEach((v) => {
          DFS(v)
        })
      }
    }
    DFS(v)
    return results
  }

  depthFirstInterative(vertex) {
    // (a)
    const results = []
    const visited = []

    // (b) (****) bài này phải sử dụng stack để track
    const stack = []
    stack.push(vertex)

    // (c)
    while (stack.length > 0) {
      // (***)
      const pop = stack.pop()

      // (***)
      if (!visited[pop]) {
        results.push(pop)
        visited[pop] = true
      }

      // (***)
      const neighbors = this.adjacencyList[pop]
      for (let i = 0; i < neighbors.length; i++) {
        if (!visited[neighbors[i]]) stack.push(neighbors[i])
      }
    }

    return results
  }
}

const graph = new Graph()
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

// thứ tụ khác nhau do chạy thằng sau cùng của neighbors trước
console.log(graph.depthFirstInterative('A'))
