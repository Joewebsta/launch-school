const Person = function(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender= gender;
}

Person.prototype.fullName = function() {
  console.log(this.firstName + ' ' + this.lastName);
};

Person.prototype.communicate = function() {
  console.log('Communicating');
};

Person.prototype.eat = function() {
  console.log('Eating');
};

Person.prototype.sleep = function() {
  console.log('Sleeping');
};

// DOCTOR -----------------------------------------------------------

const Doctor = function(firstName, lastName, age, gender, specialization) {
  Person.call(this, firstName, lastName, age, gender);
  this.specialization = specialization;  
  console.log(Object.getPrototypeOf(Object.getPrototypeOf(this)) === Object.prototype)
}

Doctor.prototype = Object.create(Person.prototype)

Doctor.prototype.diagnose = function() {
  console.log('Diagnosing');
}

Doctor.prototype.constructor = Doctor;

// PROFESSOR -----------------------------------------------------------

const Professor = function(firstName, lastName, age, gender, subject) {
  Person.call(this, firstName, lastName, age, gender);
  this.subject = subject;
  console.log(this)
}
Professor.prototype = Object.create(Person.prototype);
Professor.prototype.teach = function() {
  console.log('Teaching!');
}
Professor.prototype.constructor = Professor;


// Student -----------------------------------------------------------

const Student = function(firstName, lastName, age, gender, degree) {
  Person.call(this, firstName, lastName, age, gender);
  this.degree = degree;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function() {
  console.log('studying');
}


// Graduate Student -----------------------------------------------------------

const Grad = function(firstName, lastName, age, gender, degree, graduateDegree) {

}


// console.log(Professor.prototype)

// const person = new Person('foo', 'bar', 21, 'gender');
// console.log(person instanceof Person);     // logs true
// person.eat();                              // logs 'Eating'
// person.communicate();                      // logs 'Communicating'
// person.sleep();                            // logs 'Sleeping'
// person.fullName(); 


// const doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
// doctor
// console.log(doctor.constructor)
// console.log(doctor instanceof Person);     // logs true
// console.log(doctor instanceof Doctor);     // logs true
// doctor.eat();                              // logs 'Eating'
// doctor.communicate();                      // logs 'Communicating'
// doctor.sleep();                            // logs 'Sleeping'
// doctor.fullName();            // logs 'foo bar'
// doctor.diagnose();   

// const prof = new Professor('foo', 'bar', 21, 'gender', 'Math');
// console.log(prof instanceof Professor);     // logs true
// console.log(prof instanceof Person);     // logs true
// console.log(prof instanceof Object);     // logs true
// prof.eat();                              // logs 'Eating'
// prof.communicate();                      // logs 'Communicating'
// prof.sleep();                            // logs 'Sleeping'
// prof.fullName(); 

// const student = new Student('Joe', 'Webster', 34, 'Male', 'Comp Sci');
// student.study()
// console.log(student instanceof Student);     // logs true
// console.log(student instanceof Person);     // logs true
// console.log(student instanceof Object);     // logs true
// student.eat();                              // logs 'Eating'
// student.communicate();                      // logs 'Communicating'
// student.sleep();                            // logs 'Sleeping'
// student.fullName(); 

const grad = new grad('Joe', 'Webster', 34, 'Male', 'Comp Sci');