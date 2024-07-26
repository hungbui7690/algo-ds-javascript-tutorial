'use strict'
/*
  Depth First Traverse - Iterative
  - this lesson is hard
  - pic 
  - from this lesson, if we go from recursive to iterative & keep track of data, then use "Stack"
  

\\\\\\\\\\\\\\\\\\\\\\\
  Demo
        A
      /   \
      B   C
      |   |
      D---E
      \   /
        F

  - adjList = { "A": ["B" "C"],
                "B": ["A" "D"],
                "C": ["A" "E"],
                "D": ["B" "E" "F"],
                "E": ["C" "D" "F"],
                "F": ["D" "E"] 
              }


  Step 1: start from A
        results   []
        visited   []
        stack     [A]


  Step 2: while stack is not empty
  **************
  Round 1
  - pop the stack => pop = A
        results   []
        visited   []
        stack     []

  - if A not in visited:
    + push A into results
    + add to visited & set to true
        results   [A]
        visited   ["A": true]

  - get the neighbors of A 
    => [B C]

  - loop through the neighbors
    + if vertexes not in visited => then push to stack
        stack     [B C]

  **************
  Round 2
  - pop = C
        stack     [B]

  - push C
        results   [A C]
        visited   ["A": true, "C": true]

  - get the neighbors of C => [A E]

  - loop 
        stack     [B E]

  **************
  Round 3
  - pop = E
        stack     [B]

  - push E
        results   [A C E]
        visited   ["A": true, "C": true, "E": true]

  - get the neighbors of E 
    => [C D F]

  - loop
        stack     [B D F]

  **************
  Round 4
  - pop F
        stack     [B D]

  - push F
        results   [A C E F]
        visited   ["A": true, "C": true, "E": true, "F": true]

  - get the neighbors of E 
    => [C D F]

  - loop neighbors
        stack     [B D]

  **************
  Round 5
  - pop D
        stack     [B]

  - push D
        results   [A C E F D]
        visited   ["A": true, "C": true, "E": true, "F": true, "D": true]

  - get the neighbors of D
    => [B E F]

  - loop neighbors
        stack     [B]
    
  **************
  Round 6
  - pop B
        stack     []

  - push B
        results   [A C E F D B]
        visited   ["A": true, "C": true, "E": true, "F": true, "D": true, "B": true]

  - get the neighbors of B
    => [A D]

  - loop neighbors
        stack     []


  ==> DONE
    
*/

class Graph {
  constructor() {
    this.adjList = {}
  }
  addVertex(vertex) {
    if (!this.adjList[vertex]) this.adjList[vertex] = []
    return this.adjList[vertex]
  }
  addEdge(v1, v2) {
    this.adjList[v1].push(v2)
    this.adjList[v2].push(v1)
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

  depthFirstRecursive(vertex) {
    const results = []
    const visited = {}

    const DFS = (vertex) => {
      if (!vertex) return

      if (!visited[vertex]) {
        visited[vertex] = true
        results.push(vertex)
        const neighbors = this.adjList[vertex]

        neighbors.forEach((v) => {
          DFS(v)
        })
      }
    }

    DFS(vertex)

    return results
  }
  depthFirstIterative(vertex) {
    const results = []
    const visited = []

    const stack = [] // use stack to keep track of data
    stack.push(vertex)

    while (stack.length > 0) {
      const pop = stack.pop()

      if (!visited[pop]) {
        results.push(pop)
        visited[pop] = true
      }

      const neighbors = this.adjList[pop]
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

// we can see the order is different => depends on which neighbor we run first
console.log(graph.depthFirstIterative('A'))
