'use strict'
/*

//////////////////////////////////////////////////////

  DIJKSTRA'S ALGORITHMS - WALKTHROUGH
  - PIC (đây là bản cùi bắp, check cái này sau khi check pic TUTORIAL trước)
  - Check PIC tutorial >> sử dụng Priority Queue để làm >> sẽ chính xác và dễ hơn rất nhiều

  SIMPLE PRIORITY QUEUE 
  - mỗi khi enqueue vào, chúng ta sẽ sort theo priority
  - khi dequeue thì sẽ lấy thằng highest priority ra 
  > sử dụng tạm thằng này, sau này sẽ update thành binary heap

*/

class PriorityQueue {
  constructor() {
    this.items = []
  }
  enqueue(value, priority) {
    this.items.push({ value, priority })
    this.sort()
  }
  dequeue() {
    return this.items.shift()
  }
  sort() {
    this.items.sort((a, b) => a.priority - b.priority)
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    return this.adjacencyList[vertex]
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({
      node: vertex2,
      weight,
    })
    this.adjacencyList[vertex2].push({
      node: vertex1,
      weight,
    })
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

  Dijkstra(start, finish) {
    const queue = new PriorityQueue()
    const distances = {}
    const previous = {}
    const path = []
    let smallest

    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0
        queue.enqueue(vertex, 0)
      } else {
        distances[vertex] = Infinity
        queue.enqueue(vertex, Infinity)
      }
      previous[vertex] = null
    }
    while (queue.items.length) {
      smallest = queue.dequeue().value
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest)
          smallest = previous[smallest]
        }
        break
      }
      if (smallest || distances[smallest] !== Infinity) {
        this.adjacencyList[smallest].forEach((neighbor, index) => {
          let candidate = distances[smallest] + neighbor.weight
          let neighborNode = neighbor.node
          if (candidate < distances[neighborNode]) {
            distances[neighborNode] = candidate
            previous[neighborNode] = smallest
            queue.enqueue(neighborNode, candidate)
          }
        })
      }
    }
    return path.concat(smallest).reverse()
  }
}

const weightedGraph = new WeightedGraph()
weightedGraph.addVertex('A')
weightedGraph.addVertex('B')
weightedGraph.addVertex('C')
weightedGraph.addVertex('D')
weightedGraph.addVertex('E')
weightedGraph.addVertex('F')

weightedGraph.addEdge('A', 'B', 4)
weightedGraph.addEdge('A', 'C', 2)
weightedGraph.addEdge('B', 'E', 3)
weightedGraph.addEdge('C', 'D', 2)
weightedGraph.addEdge('C', 'F', 4)
weightedGraph.addEdge('D', 'F', 1)
weightedGraph.addEdge('D', 'E', 3)
weightedGraph.addEdge('E', 'F', 1)

console.log(weightedGraph.Dijkstra('A', 'E'))
