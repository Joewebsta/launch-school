const Student = require('./ex3-student');

const GraduateStudent = class extends Student {
  constructor(firstName, lastName, age, gender, degree, graduateDegree) {
    super(firstName, lastName, age, gender, degree);
    this.graduateDegree = graduateDegree; 
  }

  research() {
    return 'Researching';
  }
}

module.exports = GraduateStudent;