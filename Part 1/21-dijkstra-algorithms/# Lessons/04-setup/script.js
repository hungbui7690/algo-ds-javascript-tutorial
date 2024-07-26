/*
  Dijkstra's Pseudo Code
  - This function should accept a starting and ending vertex
  - Create an object (we'll call it distances) and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0.
  - After setting a value in the distances object, add each vertex with a priority of Infinity to the priority queue, except the starting vertex, which should have a priority of 0 because that's where we begin.
  - Create another object called previous and set each key to be every vertex in the adjacency list with a value of null
  - Start looping as long as there is anything in the priority queue  
    + dequeue a vertex from the priority queue
    + If that vertex is the same as the ending vertex - we are done!
    + Otherwise loop through each value in the adjacency list at that vertex
      > Calculate the distance to that vertex from the starting vertex
      > if the distance is less than what is currently stored in our distances object
        # update the distances object with new lower distance
        # update the previous object to contain that vertex
        # enqueue the vertex with the total distance from the start node


**********************
  Demo
  - Queue is PriorityQueue => when enqueue or dequeue, we will move the smallest (highest priority) on top.
  - Find the shortest path from A to E => Dijkstra(A, E)

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

          4
        A -- B
     2 /      \ 3
      / 2   3  \
     C ---D---- E
      \   |   / 
     4 \ 1|  / 1
        \ | /
          F

  queue = [     distances = {     previous = {     path = []
    A : 0         A : 0             A : null
    B : Inf       B : Inf           B : null
    C : Inf       C : Inf           C : null
    D : Inf       D : Inf           D : null
    E : Inf       E : Inf           E : null
    F : Inf       F : Inf           F : null
  ]             }                 }


  + Previous: {B : A}
    - the shortest path to B is from A
  + Distances: {B : 4}
    - distances from smallest A to B is 4


***********************
  Step 1: pick the smallest from queue => dequeue => A = 0
  - neighbors of A is B & C
    + A: [{node : B, weight : 4},
          {node : C, weight : 2}]
  - candidate = distances[smallest] + neighbor.weight = distance[A] + B.weight && compare with distances
    + B = AB = 0 + 4 < distances[B]
    + C = AC = 0 + 2 < distances[C]
  - update
    + distances[B] = 4
    + enqueue(B, 4)
    + distances[C] = 4
    + enqueue(C, 2)
      => when we enqueue/dequeue the queue, data is auto sorted
  *** previous = {B:A} => the shortest path to B is from A, the shortest path to C is from A
      distances = {B:4} distances from A (smallest) to B is 4, and to C is 2
      => Compare previous & distances, we know the path and the weight from smallest to that vertex

  queue = [     distances = {     previous = {     path = []    smallest = <A>
    C : <2>       A : 0             A : null 
    B : <4>       B : <4>           B : <A>
    D : Inf       C : <2>           C : <A>
    E : Inf       D : Inf           D : null
    F : Inf       E : Inf           E : null
                  F : Inf           F : null
  ]             }                 }


  ********************
  Step 2: pick the smallest => dequeue => C
  - Neighbors: 
      {node : A, weight : 2} => A = CA = 4 > distances[A]=0
      {node : D, weight : 2} => D = CD = 4 < distances[D]=Inf
      {node : F, weight : 4} => F = CF = 6 < distances[F]=Inf

          4
        A -- B
     2 /      \ 3
      / 2   3  \
     C ---D---- E
      \   |   / 
     4 \ 1|  / 1
        \ | /
          F

  queue = [     distances = {     previous = {     path = []    smallest = <C>
    B : 4         A : 0             A : null
    D : <4>       B : 4             B : A
    F : <6>       C : 2             C : A
    E : Inf       D : <4>           D : C
  ]               E : Inf           E : null
                  F : <6>           F : C
                }                 }


  ********************
  Step 3: pick the smallest => dequeue => B
  - Neighbors
      {node : A, weight : 4} => A = BA = 4 + 0 = 4 > distances[A]=0
      {node : E, weight : 3} => E = BE = 4 + 3 = 7 < distances[E]=Inf


          4
        A -- B
     2 /      \ 3
      / 2   3  \
     C ---D---- E
      \   |   / 
     4 \ 1|  / 1
        \ | /
          F

  queue = [     distances = {     previous = {     path = []    smallest = <B>
    D : 4         A : 0             A : null
    F : 6         B : 4             B : A
    E : <7>       C : 2             C : A
  ]               D : 4             D : C
                  E : <7>           E : <B>
                  F : 6             F : C
                }                 }


  ********************
  Step 4: pick the smallest => dequeue => D
  - Neighbors: 
      {node : C, weight : 2} => C = DC = 4 + 2 = 6  >  distances[C]=2
      {node : E, weight : 3} => E = DE = 4 + 3 = 7 === distances[E]=7
      {node : F, weight : 1} => F = DF = 4 + 1 = 5  <  distances[F]=6

          4
        A -- B
     2 /      \ 3
      / 2   3  \
     C ---D---- E
      \   |   / 
     4 \ 1|  / 1
        \ | /
          F

  queue = [     distances = {     previous = {     path = []    smallest = <D>
    F : 5         A : 0             A : null
    E : 7         B : 4             B : A
                  C : 2             C : A
  ]               D : 4             D : C
                  E : 7             E : B
                  F : <5>           F : <D>
                }                 }

  
  ********************
  Step 5: smallest => dequeue => F
  - Neighbors:
      {node : C, weight : 4} => C = FC = 5 + 4 = 9 > distances[C]=2
      {node : D, weight : 1} => D = FD = 5 + 1 = 6 > distances[D]=4
      {node : E, weight : 1} => E = FE = 5 + 1 = 6 < distances[E]=7

          4
        A -- B
     2 /      \ 3
      / 2   3  \
     C ---D---- E
      \   |   / 
     4 \ 1|  / 1
        \ | /
          F

  queue = [     distances = {     previous = {     path = []    smallest = <F>
    E : 6         A : 0             A : null
  ]               B : 4             B : A
                  C : 2             C : A
                  D : 4             D : C
                  E : <6>           E : <F>
                  F : 5             F : D
                }                 }


  ********************
  Step 6: smallest = E = 7 => queue now is empty 
  - push E to Path => path = [E]
  
  ********************
  Step 7: from Path, check E : F 
  - push F to Path => path = [E F]

  ********************
  Step 8: continuously, push D C A => path = [E F D C A]

  ********************
  Step 9: A : null => break => we can reverse the path array => [A C D F E] 

  => DONE


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
    let smallest

    // setup queue[], distances{} & previous{}
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

    console.log('**************')
    console.log('queue', queue)
    console.log('distances', distances)
    console.log('previous', previous)
    console.log('**************')

    while (queue.items.length) {
      smallest = queue.dequeue()
      console.log('smallest', smallest)
    }
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

weightedGraph.Dijkstra('A', 'E')
