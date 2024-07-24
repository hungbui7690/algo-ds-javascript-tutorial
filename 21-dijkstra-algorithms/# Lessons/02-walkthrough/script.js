'use strict'
/*
  Dijkstra's Algorithms - Walkthrough
  - pic (this is the simple version, check walkthrough pic after tutorial)
  - pic tutorial -> use Priority Queue => more exact & easier
  

\\\\\\\\\\\\\\\\\\\\
  Walkthrough
  1. Everytime we look to visit a new node, we pick the node with the smallest known distance to visit first
  2. Once we've moved to the node we're going to visit, we look at each ot its neighbors
  3. For each neighboring node, we calculate the distance by summing the total edges that lead to the node we're checking from the starting node
  4. If the new total distance to a node is less than the previous total, we store the new shorter distance for that node.

          4
        A -- B
     2 /      \ 3
      / 2   3  \
     C ---D---- E
      \   |   / 
     4 \ 1|  / 1
        \ | /
          F

  - There are multiple paths from A to E
    + A - B - E
    + A - C - D - E
    + A - C - D - F - E
    + A - C - F - E
    + A - C - F - D - E

  - Shortest = Shortest Distance from A 
  - A to A = 0 
    +--------+----------+
    | Vertex | Shortest |         Visited     []
    +--------+----------+ 
    | A      |    0     |         Previous    {
    +--------+----------+                        A: null,
    | B      | Infinity |                        B: null,
    +--------+----------+                        C: null,
    | C      | Infinity |                        D: null,
    +--------+----------+                        E: null,
    | D      | Infinity |                        F: null
    +--------+----------+                      }
    | E      | Infinity |
    +--------+----------+
    | F      | Infinity |
    +--------+----------+



  Step 1: pick the smallest from the table => update visited
    +--------+----------+
    | Vertex | Shortest |         Visited     [<A>]
    +--------+----------+ 
    | A      |    0     |         Previous    {
    +--------+----------+                        A: null,
    | B      | Infinity |                        B: null,
    +--------+----------+                        C: null,
    | C      | Infinity |                        D: null,
    +--------+----------+                        E: null,
    | D      | Infinity |                        F: null
    +--------+----------+                      }
    | E      | Infinity |
    +--------+----------+
    | F      | Infinity |
    +--------+----------+


  Step 2: Find the neighbor of A => B & C => We start with B first
  - A to B = 4 => 4 < Infinity => update Previous (the way we got to B is through A ) 

          4
        A -- B
     2 /      \ 3
      / 2   3  \
     C ---D---- E
      \   |   / 
     4 \ 1|  / 1
        \ | /
          F

    +--------+----------+
    | Vertex | Shortest |         Visited     [A]
    +--------+----------+ 
    | A      |    0     |         Previous    {
    +--------+----------+                        A: null,
    | B      |    <4>   |                        B: <A>,
    +--------+----------+                        C: null,
    | C      | Infinity |                        D: null,
    +--------+----------+                        E: null,
    | D      | Infinity |                        F: null
    +--------+----------+                      }
    | E      | Infinity |
    +--------+----------+
    | F      | Infinity |
    +--------+----------+


  Step 3: A to C = 2 => update Previous to know where it comes from

          4
        A -- B
     2 /      \ 3
      / 2   3  \
     C ---D---- E
      \   |   / 
     4 \ 1|  / 1
        \ | /
          F

    +--------+----------+
    | Vertex | Shortest |         Visited     [A C]
    +--------+----------+ 
    | A      |    0     |         Previous    {
    +--------+----------+                        A: null,
    | B      |    4     |                        B: A,
    +--------+----------+                        C: <A>,
    | C      |    <2>   |                        D: null,
    +--------+----------+                        E: null,
    | D      | Infinity |                        F: null
    +--------+----------+                      }
    | E      | Infinity |
    +--------+----------+
    | F      | Infinity |
    +--------+----------+

  => We are done with A

  Step 4: A is in the Visited => we don't pick A from the table => C is the smallest => update Visited, Previous (same as from A, but now is from C) & Table

    +--------+----------+
    | Vertex | Shortest |         Visited     [A <C>]
    +--------+----------+ 
    | A      |    0     |         Previous    {
    +--------+----------+                        A: null,
    | B      |    4     |                        B: A,
    +--------+----------+                        C: A,
    | C      |    2     |                        D: <C>,
    +--------+----------+                        E: null,
    | D      |    <4>   |                        F: <C>
    +--------+----------+                      }
    | E      | Infinity |
    +--------+----------+
    | F      |    <6>   |
    +--------+----------+

  *** D=4 & F=6 => because D = AC + CD & F = AC + CF
          4
        A -- B
     2 /      \ 3
      / 2   3  \
     C ---D---- E  
      \   |   / 
     4 \ 1|  / 1
        \ | /
          F

  Step 5: pick the smallest (we're done with A & C) => B & D => we can pick either of these => in this case, we pick B 
  => Update Visited + Previous + Table
  => E = AB + BE = 4 + 3 = 7      
    +--------+----------+
    | Vertex | Shortest |         Visited     [A C <B>]
    +--------+----------+ 
    | A      |    0     |         Previous    {
    +--------+----------+                        A: null,
    | B      |    4     |                        B: A,
    +--------+----------+                        C: A,
    | C      |    2     |                        D: C,
    +--------+----------+                        E: <B>,
    | D      |    4     |                        F: C
    +--------+----------+                      }
    | E      |    <7>   |
    +--------+----------+
    | F      |    6     |
    +--------+----------+

  Step 6: pick the smallest (we're done with A B C) => D 
  => Update Visited => D has C E F as neighbors => we pick E & F
  => E = AB + BE = 7 => it's already 7 
  => F = AC + CD + DF = 5 (less than 6) => update table + Previous


          4
        A -- B
     2 /      \ 3
      / 2   3  \
     C ---D---- E  
      \   |   / 
     4 \ 1|  / 1
        \ | /
          F
 
    +--------+----------+
    | Vertex | Shortest |         Visited     [A C B <D>]
    +--------+----------+ 
    | A      |    0     |         Previous    {
    +--------+----------+                        A: null,
    | B      |    4     |                        B: A,
    +--------+----------+                        C: A,
    | C      |    2     |                        D: C,
    +--------+----------+                        E: B,
    | D      |    4     |                        F: <D>
    +--------+----------+                      }
    | E      |    7     |
    +--------+----------+
    | F      |    <5>   |
    +--------+----------+

  - The shortest path that starts from A: 
    + To B is from A
    + To C is from A 
    + To D is from C
    + To E is from B 
    + To F is from D (not C anymore)


  Step 7: pick the smallest (done with A B C D) => pick F
  => we're done with CF & DF already => we will work on EF
  => look on Previous, we can see that the shortest path to F is from D => to D is from C => to C is from A => we have A -> C -> D -> F 
  => update E because we find the shortest path: AC + CD + DF + FE = 6 => Update Previous as well

          4
        A -- B
     2 /      \ 3
      / 2   3  \
     C ---D---- E
      \   |   / 
     4 \ 1|  / 1
        \ | /
          F

    +--------+----------+
    | Vertex | Shortest |         Visited     [A C B D <F>]
    +--------+----------+ 
    | A      |    0     |         Previous    {
    +--------+----------+                        A: null,
    | B      |    4     |                        B: A,
    +--------+----------+                        C: A,
    | C      |    2     |                        D: C,
    +--------+----------+                        E: <F>,
    | D      |    4     |                        F: D
    +--------+----------+                      }
    | E      |    <6>   |
    +--------+----------+
    | F      |    5     |
    +--------+----------+


  We found the shortest path from A to E: A -> C -> D -> F -> E

*/

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
