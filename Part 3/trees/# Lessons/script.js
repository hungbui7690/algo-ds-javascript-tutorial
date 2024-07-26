/*
  Terminology
  - pic
  - Tree contains Nodes (Vertices) & Edges
    + n nodes => n-1 edges
  - subset:
    + each subset is a tree again

****************
  Terms:  
  - root
  - parent / child
  - siblings => same parent
    + E F 
    + G H I
    + B C D
  - descendants: 
    + E F J K M are descendants of B
  - ancestors:
    + M: J F B A are ancestors 
    + L: H D A are ancestors
  - degree: number of direct children
    + L : 2
    + D, A : 3
    + J : 1
    + N, K : 0
    => we cannot tell the degree of a tree
  - internal / external nodes
    + also called as non-leaf / leaf nodes 
    + leaf = external = terminal nodes = 0 child => N N O E I ...
    + greater than 0 => internal = non-terminal = non-leaf nodes 
  - levels 
    + root = lv 1 => A
    + next = lv 2 => 2 nodes => A D or A C or A B
    + next = lv 3 => 3 nodes => A B E or A B F or A D G ...
  - height: count edges 
    + root = height 0
    + next = height 1
    ...
  - forest => collection of trees => multi trees


                A
            /   |   \
          B     C     D
        /  \        / | \
       E    F      G  H  I
          /  \        |
        J      K      L
        |            / \
        M           N   O

****************
  Binary Tree
  - degree 2 => maximum 2 children
  - children can be {0, 1, 2}

              A
          /      \
         B        C  
       /   \    /   \ 
      D     E  F     G

            A
          /   \
         B     C  
             /   \ 
            F     G

  
  - Left Skewed Tree
            A
          /
        B
      /
    C

  
  - Not Binary Tree
            A
        /   |   \
      B     C     D
    /  \        / | \
   E    F      G  H  I


  - Also Binary Tree
    A - B - C
    |   |
    |   D
    E - F
    |
    G


****************
  Number of Binary Trees Using N Nodes 
  - pic

  - 3 nodes => 5 trees => maxHeight = 4 = 2^2
  - 4 nodes => 14 trees => maxHeight = 8 = 2^3
  - n nodes => x trees => maxHeight = 2^(n-1)

                            2n
                              Cn
  - catalan number = T(n) = -----
                            n + 1

                            10*9*8*7*6*5    
            2*5     10      ------------    
               C5     C5    5*4*3*2*1       3*2*7
  - T(5) = ------ = ---- = -------------- = ----- = 42
              6      6          6             6


xxxxxxxxxxxxxxxxxxx
  Another Formula
xxxxxxxxxxxxxxxxxxx

  n      0    1      2     3     4      5    6
  T(n)  (1)   [1]   {2}   {5}   [14]  (42)   ?

  - find T(6):
    + 1 x 42
    + 1 x 14
    + 2 x 5
    + 5 x 2
    + 14 x 1
    + 42 x 1

  T(6) = 1*42 + 1*14 + 2*5 + 5*2 + 14*1 + 42*1 = 132

  T(6) = T(0)*T(5) + T(1)*T(4) + T(2)*T(3) + T(3)*T(2) + T(4)*T(1) + T(5)*T(0)

  T(n) = sum  T(i-1) * T(n-i)
*/
