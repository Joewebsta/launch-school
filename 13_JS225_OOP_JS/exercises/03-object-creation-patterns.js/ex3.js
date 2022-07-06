const Person = require('./ex3-person');
const Doctor = require('./ex3-doctor');
const Student = require('./ex3-student');
const GraduateStudent = require('./ex3-graduateStudent');

const person = new Person('foo', 'bar', 21, 'gender');
// console.log(person instanceof Person);
// console.log(person instanceof Object);
// console.log(person.eat());         
// console.log(person.communicate()); 
// console.log(person.sleep());       
// console.log(person.fullName());     

const doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
// console.log(doctor);
// console.log(doctor instanceof Person);     // logs true
// console.log(doctor instanceof Doctor);     // logs true
// console.log(doctor.eat());                 // logs 'Eating'
// console.log(doctor.constructor);                 // logs 'Eating'
// console.log(doctor.communicate());         // logs 'Communicating'
// console.log(doctor.sleep());               // logs 'Sleeping'
// console.log(doctor.fullName());            // logs 'foo bar'
// console.log(doctor.diagnose());               // logs 'Diagnosing'

const student = new Student('foo', 'bar', 21, 'gender', 'BS Industrial Engineering');
// console.log(student);
// console.log(student instanceof Person);
// console.log(student instanceof Student);
// console.log(student.eat());                     // logs 'Eating'
// console.log(student.communicate());             // logs 'Communicating'
// console.log(student.sleep());                   // logs 'Sleeping'
// console.log(student.fullName());   // logs 'foo bar'
// console.log(student.study());                   // logs 'Studying'

const graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// console.log(graduateStudent)
// console.log(graduateStudent instanceof Person);
// console.log(graduateStudent instanceof Student);
// console.log(graduateStudent instanceof GraduateStudent);
// console.log(graduateStudent.eat());                     // logs 'Eating'
// console.log(graduateStudent.communicate());             // logs 'Communicating'
// console.log(graduateStudent.sleep());                   // logs 'Sleeping'
// console.log(graduateStudent.fullName());   // logs 'foo bar'
// console.log(graduateStudent.study());                   // logs 'Studying'
// console.log(graduateStudent.research());                // logs 'Researching'


