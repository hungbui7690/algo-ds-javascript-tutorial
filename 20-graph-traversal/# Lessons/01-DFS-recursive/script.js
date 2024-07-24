/*
  Intro 
  - Pic


****************
  Depth First Graph Traversal
  - pic
  - 2 ways: Recursive & Iterative


****************
  Steps

  - The function should accept a starting node
  - Create a list to store the end result, to be returned at the very end
  - Create an object to store visited vertices
  - Create a helper function which accepts a vertex
    + This function should return early if the vertex is empty
    + This function should place the vertex it accepts into the visited object and push that vertex into the result array
    + Loop over all of the values in the adjList for that vertex
    + If any of those values have not been visited, recursive invoke the helper function with that vertex
  - Invoke the helper function with the starting vertex
  - Return the result array


  Pseudo Code of helper function: 
  - DFS(vertex):
      if vertex is empty:
        return
      add vertex to results list
      mark vertex as visited
      for each neighbor in vertex's neighbors:
        if neighbor is not visited: 
          recursive call DFS on neighbor


****************
  Demo: we have a graph

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
  
  Step 1: Start from A 
    "A": ["B" "C"]

    visited = { 
      "A" : true
    }

  Step 2: Go to B
    "B": ["A" "D"]

    visited = { 
      "A" : true
      "B" : true
      "D" : true
    }

  Step 3: Go to D
    "D": ["B" "E" "F"]

    visited = { 
      "A" : true
      "B" : true
      "D" : true
      "E" : true
    }

  Step 4: Go to E
    "E": ["C" "D" "F"]

    visited = { 
      "A" : true
      "B" : true
      "D" : true
      "E" : true
      "C" : true
    }

  Step 4: Go to F
    "F": ["D" "E"] 

    visited = { 
      "A" : true
      "B" : true
      "D" : true
      "E" : true
      "C" : true
      "F" : true
    }
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
    const visited = {} // store visited vertices

    // Helper function
    const DFS = (vertex) => {
      if (!vertex) return // if vertex is empty, then return

      // if the vertex not in the visited object
      if (!visited[vertex]) {
        visited[vertex] = true
        results.push(vertex)
        const neighbors = this.adjList[vertex] // get all the neighbors of that vertex

        // console.log('neighbors', neighbors)
        // console.log('visited', visited)

        // recursive call the helper function on the neighbors of that vertex
        neighbors.forEach((v) => {
          DFS(v)
        })
      }
    }

    DFS(vertex)

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

console.log(graph)
console.log(graph.depthFirstRecursive('A'))
