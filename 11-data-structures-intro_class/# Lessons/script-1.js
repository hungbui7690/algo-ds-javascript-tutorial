/*

  DS thể hiện relationship giữa data với nhau 
  - Array: có order 
  - Object: ko có order 
  - Và những DS khác (học sau) 
  
  > Quan trọng là relationship và Behaviour

  WHY? 
  - đôi khi phải work với data that is not linear >> Array và Object ko thể thoả mãn đc 
  - Ví dụ khi work với DOM, chúng ta đã work với Tree  
  - mỗi DS đều có đặc điểm riêng, và excel at one thing: 
    + ví dụ muốn viết app GSP để show vị trí của Gas Station >> Graph 
      > rất khó để represent maps với single array 
    + ví dụ muốn 1 ordered list with fast inserts/removals at the beginning and end: 
      > chúng ta đã biết array thì rất khó khi insert và remove ở beginning of the array >> Linked List  
    + ví dụ muốn scrape html từ 1 website về >> Tree
    ....

//////////////////////////////////////////////////////////

  ES2015 Classes 
  - chúng ta cần biết thằng này để define DS 

    > https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
  
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
