const Person = require('./ex3-person');

class Doctor extends Person {
  constructor(firstName, lastName, age, gender, specialization) {
    super(firstName, lastName, age, gender);
    this.specialization = specialization;
  }

  diagnose() {
    return 'Diagnosing';    
  }
}

module.exports = Doctor;

// const Doctor = function(firstName, lastName, age, gender, specialization) {
//   Person.call(this, firstName, lastName, age, gender);
//   this.specialization = specialization;
// }

// Doctor.prototype = Object.create(Person.prototype);
// Doctor.prototype.constructor = Doctor;

// Doctor.prototype.diagnose = function() {
//   return 'Diagnosing';
// }