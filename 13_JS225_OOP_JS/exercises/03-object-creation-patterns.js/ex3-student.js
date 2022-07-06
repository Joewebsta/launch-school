const Person = require('./ex3-person');

const Student = class extends Person {
  constructor(firstName, lastName, age, gender, degree) {
    super(firstName, lastName, age, gender);
    this.degree = degree;
  }

  study = function() {
    return 'Studying';
  }
}

module.exports = Student;

// let Student = function(firstName, lastName, age, gender, degree) {
//   Person.call(this, firstName, lastName, age, gender);
//   this.degree = degree;
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// Student.prototype.study = function() {
//   return 'Studying';
// }