/*
  
//////////////////////////////////////////////////////////

  Class Methods
  - sử dụng keywork static 
  - ko thể gọi bằng instance 
  - đc ko mà ko cần phải instantiate
  - giống utility functionv

*/

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName
    this.lastName = lastName
    this.grade = year
    this.tardies = 0
    this.scores = []
  }
  fullname() {
    return `Your fullname is ${this.firstName} ${this.lastName}`
  }

  markLate() {
    this.tardies++
    if (this.tardies >= 3) return `YOU ARE EXPELLED!!!`
    return ` ${this.firstName} ${this.lastName} has been late for ${this.tardies} times`
  }
  addScore(score) {
    this.scores.push(score)
    return this.scores
  }
  calculateAverage() {
    const sum = this.scores.reduce((acc, cur) => acc + cur)
    return sum / this.scores.length
  }

  // (1)
  static EnrollingStudents() {
    return `Enrolling Students!!`
  }
}

const firstStudent = new Student('Joe', 'Doe', 1)
const secondStudent = new Student('Blue', 'Mark', 3)

console.log(firstStudent.markLate())
console.log(firstStudent.markLate())
console.log(firstStudent.tardies)
console.log(firstStudent.markLate())

// (2)
console.log(Student.EnrollingStudents())
