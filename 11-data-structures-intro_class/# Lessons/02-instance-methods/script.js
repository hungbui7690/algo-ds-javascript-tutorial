/*
  
//////////////////////////////////////////////////////////

  Instance Methods


*/

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName
    this.lastName = lastName
    this.grade = year

    // (3)
    this.tardies = 0

    // (6)
    this.scores = []
  }

  // (1)
  fullname() {
    return `Your fullname is ${this.firstName} ${this.lastName}`
  }

  // (4)
  markLate() {
    this.tardies++
    if (this.tardies >= 3) return `YOU ARE EXPELLED!!!`
    return ` ${this.firstName} ${this.lastName} has been late for ${this.tardies} times`
  }

  // (7)
  addScore(score) {
    this.scores.push(score)
    return this.scores
  }

  // (9)
  calculateAverage() {
    const sum = this.scores.reduce((acc, cur) => acc + cur)
    return sum / this.scores.length
  }
}

const firstStudent = new Student('Joe', 'Doe', 1)
const secondStudent = new Student('Blue', 'Mark', 3)
console.log(firstStudent, secondStudent)

// (2)
const fullname = firstStudent.fullname()
console.log(fullname)

// (5)
console.log(firstStudent.markLate())
console.log(firstStudent.markLate())
console.log(firstStudent.tardies)
console.log(firstStudent.markLate())

// (8)
secondStudent.scores.push(10) // vẫn có thể add trực tiếp
console.log(secondStudent.addScore(99))
console.log(secondStudent.scores)

// (10)
console.log(secondStudent.calculateAverage())
