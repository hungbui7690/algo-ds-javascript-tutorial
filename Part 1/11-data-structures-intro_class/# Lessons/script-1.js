/*
  DS show the relationship between data
  - Array: has order
  - Object: NOT has order
  - Others DS (later)
  DS also has behaviors

  +++++++++++++++
  WHY
  - Sometimes, we have to work with data does is not linear 
    + so that Array and Object can not satisfy the requirement
  - For ex
    + DOM => Tree DS
    + GSP to show the position at Gas Station => Graph
      -> It's hard to represents maps with single array
    + If we want an ordered list with fast inserts/removals at the beginning and ending.
      -> We know that array takes a long time to insert/remove at the beginning => Linked List
    + Scrap HTML from a website => Tree
  
  ++++++++++++++++
  Classes 
  - To define DS, we need to use classes
  
*/

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName
    this.lastName = lastName
    this.grade = year
  }
}

// instantiation
const firstStudent = new Student('Joe', 'Doe', 2013)
const secondStudent = new Student('Blue', 'Mark', 2013)
console.log(firstStudent, secondStudent)
