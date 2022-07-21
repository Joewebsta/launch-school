function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
}

Person.prototype.eat = function() {
  return 'eating';
}

Person.prototype.communicate = function() {
  return 'communicating';
}

Person.prototype.sleep = function() {
  return 'sleeping';
}

function Student(firstName, lastName, age, gender, degree) {
  Person.call(this, firstName, lastName, age, gender);
  this.degree = degree;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function() {
  return 'studying';
}


function GraduateStudent(firstName, lastName, age, gender, degree, graduateDegree) {
  Student.call(this, firstName, lastName, age, gender, degree, graduateDegree);
  this.graduateDegree = graduateDegree;
}

GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.constructor = GraduateStudent;

GraduateStudent.prototype.research = function() {
  return 'Researching';
}

const person = new Person('foo', 'bar', 21, 'gender');
console.log(person instanceof Person);     // logs true
console.log(person.eat());        
console.log(person.communicate());
console.log(person.sleep());      
console.log(person.fullName());   

const student = new Student('foo', 'bar', 21, 'gender', 'Comp Sci');
console.log(student instanceof Student);     // logs true
console.log(student.eat());        
console.log(student.communicate());
console.log(student.sleep());      
console.log(student.fullName());   
console.log(student.study());   

const gradStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'Comp Sci', 'AI');
console.log(gradStudent instanceof GraduateStudent);     // logs true
console.log(gradStudent.eat());        
console.log(gradStudent.communicate());
console.log(gradStudent.sleep());      
console.log(gradStudent.fullName());   
console.log(gradStudent.study());   
console.log(gradStudent.research());   