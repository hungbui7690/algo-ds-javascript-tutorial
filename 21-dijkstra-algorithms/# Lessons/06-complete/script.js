/*
  Dijkstra's Algorithm
  - Queue is PriorityQueue => when enqueue or dequeue, we will move the smallest (highest priority) on top.


          4
        A -- B
     2 /      \ 3
      / 2   3  \
     C ---D---- E
      \   |   / 
     4 \ 1|  / 1
        \ | /
          F

    adjList = {
        "A": [
          {node : B, weight : 4},
          {node : C, weight : 2}
        ]
        "B" : [
          {node : A, weight : 4},
          {node : E, weight : 3}
        ],
        "C" : [
          {node : A, weight : 2},
          {node : D, weight : 2},
          {node : F, weight : 4}
        ],
        "D" : [
          {node : C, weight : 2},
          {node : E, weight : 3},
          {node : F, weight : 1}
        ],
        "E" : [
          {node : B, weight : 3},
          {node : D, weight : 3},
          {node : F, weight : 1}
        ],
        "F" : [
          {node : C, weight : 4},
          {node : D, weight : 1},
          {node : E, weight : 1}
        ]
    }

  - Find the shortest path from A to E => Dijkstra(A, E)


*****************
  Step 1: create empty objects
    queue = new PriorityQueue()
    distances = {}
    previous = {}
    path = []
    smallest = undefined


    queue = []     distances = {}     previous = {}     path = []     smallest=undefined


*****************
  Step 2: fill default data to objects
    Loop though adjList 
      if vertex is start 
        add vertex : 0 to distances{}
        enqueue vertex with value = 0 
      else 
        add vertex : Infinity to distances
        enqueue vertex with value = Infinity
      previous[vertex] = null


    queue = [     distances = {     previous = {     path = []
      A : 0         A : 0             A : null       smallest = undefined
      B : Inf       B : Inf           B : null       
      C : Inf       C : Inf           C : null
      D : Inf       D : Inf           D : null
      E : Inf       E : Inf           E : null
      F : Inf       F : Inf           F : null
    ]               }                 }


*****************
  Step 3: 
    Loop when queue is not empty
      smallest = dequeue => A
      
      if smallest is not null or distances[smallest] is not Infinity
        Loop adjList[smallest] (neighbors)
          candidate = distances[smallest] + neighbor.weight
          neighborNode = neighbor.node
          if candidate < distances[neighborNode]
            distances[neighborNode] = candidate
            previous[neighborNode] = smallest
            enqueue(neighborNode, candidate)


  - smallest = A
  - neighbors: 
    + {node : B, weight : 4} => candidate = distances[A] + B.weight = 0 + 4 = 4 < distances[B]=Inf
    + {node : C, weight : 2} => candidate = distances[A] + C.weight = 0 + 2 = 2 < distances[C]=Inf
  - update B:
    + distances[B] = candidate = 4
    + previous[B] = smallest = A
    + enqueue(B, 4)
  - update C: 
    + distances[C] = candidate = 2
    + previous[C] = smallest = A
    + enqueue(C, 2)

    queue = [     distances = {     previous = {     path = []
      C : <2>       A : 0             A : null       smallest = <A>
      B : <4>       B : <4>           B : <A>        
      D : Inf       C : <2>           C : <A>
      E : Inf       D : Inf           D : null
      F : Inf       E : Inf           E : null
    ]               F : Inf           F : null
                  }                 }


  - smallest = C
  - neighbors: 
    + {node : A, weight : 2} => A = 2 + 0 = 2 > 0 
    + {node : D, weight : 2} => D = 2 + 2 = 4 < Inf
    + {node : F, weight : 4} => F = 2 + 4 = 6 < Inf
  - then update D & F

    queue = [     distances = {     previous = {     path = []
      B : 4         A : 0             A : null       smallest = <C>
      D : <4>       B : 4             B : A
      F : <6>       C : 2             C : A
      E : Inf       D : <4>           D : <C>
                    E : Inf           E : null
    ]               F : <6>           F : <C>
                  }                 }


  - smallest = B
  - neighbors: 
    + {node : A, weight : 4} => A = BA = 4 + 0 = 4 > 0 
    + {node : E, weight : 3} => E = EB = 3 + 4 = 7 < Inf
  - then update E

    queue = [     distances = {     previous = {     path = []
      D : 4         A : 0             A : null       smallest = <B>
      F : 6         B : 4             B : A
      E : <7>       C : 2             C : A
                    D : 4             D : C
                    E : <7>           E : <B>
    ]               F : 6             F : C
                  }                 }


  - smallest = D
  - neighbors: 
    + {node : C, weight : 2} => C = DC = 4 + 2 = 6  >  4
    + {node : E, weight : 3} => E = DE = 4 + 3 = 7 === 7  
    + {node : F, weight : 1} => F = DF = 4 + 1 = 5  <  6
  - then update F

    queue = [     distances = {     previous = {     path = []
      F : <5>       A : 0             A : null       smallest = <D>
      E : 7         B : 4             B : A
                    C : 2             C : A
                    D : 4             D : C
                    E : 7             E : B
    ]               F : <5>           F : <D>
                  }                 }


  - smallest = F
  - neighbors: 
    + {node : C, weight : 4} => C = FC = 5 + 4 = 9 > 2
    + {node : D, weight : 1} => D = FD = 5 + 1 = 6 > 2
    + {node : E, weight : 1} => E = FE = 5 + 1 = 6 < 7
  - Update E

    queue = [     distances = {     previous = {     path = []
      E : <6>       A : 0             A : null       smallest = <F>
                    B : 4             B : A
                    C : 2             C : A
                    D : 4             D : C
                    E : <6>           E : <F>
    ]               F : 5             F : D
                  }                 }


  - smallest = <E> 
  - queue is empty 


  ********************
  Step 4: push to path

      if smallest === finish
        while previous[smallest]
          path.push(smallest)
          smallest = previous[smallest]
        break

  - smallest === finish = <E>
    + previous[E] not null
      # path     = [E]
      # smallest = previous[E] = F

      # path     = [E F]
      # smallest = previous[F] = D

      # path     = [E F D]
      # smallest = previous[D] = C
  
      # path     = [E F D C]
      # smallest = previous[C] = A

      # path     = [E F D C A]
      # smallest = previous[C] = A

    + previous[A] is null 
      # break


  => reverse path = [A C D F E]

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
    this.adjList = {}
  }
  addVertex(vertex) {
    if (!this.adjList[vertex]) this.adjList[vertex] = []
    return this.adjList[vertex]
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjList[vertex1].push({
      node: vertex2,
      weight,
    })
    this.adjList[vertex2].push({
      node: vertex1,
      weight,
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

  Dijkstra(start, finish) {
    const queue = new PriorityQueue()
    const distances = {}
    const previous = {}
    const path = []
    let smallest

    for (let vertex in this.adjList) {
      if (vertex === start) {
        distances[vertex] = 0
        queue.enqueue(vertex, 0)
      } else {
        distances[vertex] = Infinity
        queue.enqueue(vertex, Infinity)
      }
      previous[vertex] = null
    }

    console.log('****** SETUP ********')
    console.log(queue)
    console.log(distances)
    console.log(previous)
    console.log('*********************')

    // not queue.length, but queue.items.length
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
        this.adjList[smallest].forEach((neighbor, index) => {
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
