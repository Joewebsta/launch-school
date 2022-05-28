function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${this.year} year student.`);
    },

    listCourses() {
      console.log(this.courses);
    },

    addCourse(course) {
      this.courses.push(course);
    },

    addNote(code, note) {
      const course = this.findCourse(code);

      if (course.notes) {
        course.notes.push(note);
      } else {
        course.notes = [note];
      }
    },

    findCourse(code) {
      return this.courses.find(course => code === course.code);
    }, 

    findCourseByName(name) {
      return this.courses.find(course => name === course.name);
    }, 

    viewNotes() {
      this.courses.filter(({ notes }) => notes )
        .map(({ name, notes }) => `${name}: ${notes.join('; ')}`)
        .forEach(noteString => console.log(noteString));
    },

    updateNote(code, notes) {
      const course = this.findCourse(code);
      const notesArr = notes.split('; ')
      course.notes = [...notesArr];
    }
  }
}

const school = {
  students: [],
  validYears: ['1st', '2nd', '3rd', '4th', '5th'],

  addStudent(name, year) {
    if (this.validYears.includes(year)) {
      const student = createStudent(name, year);
      this.students.push(student);
      return student;
    } else {
      console.log("Invalid year");
    }
  },

  findStudent(name) {
    return this.students.find(student => student.name === name);
  },

  enrollStudent(student, course) {
    this.findStudent(student).addCourse(course);
  },

  addGrade(studentName, courseCode, grade) {
    const student = this.findStudent(studentName);
    const course = student.findCourse(courseCode);
    course.grade = grade;
  },

  getReportCard(name) {
    const student = this.findStudent(name);
    const courses = student.courses;

    courses.forEach(({ name, grade }) => {
      grade ||= 'In Progress';
      console.log(`${name}: ${grade}`);
    })
  },

  // Done - Student doesn't have course removed
  // Student has course, but has no grades
  courseReport(courseName) {
    let grades = this.studentGrades(courseName);

    if (grades) {
      this.displayGradeInfo(courseName, grades);
    } else {
      return undefined;
    }    
  },

  displayGradeInfo(courseName, grades) {
      let average = this.calculateGradeAverage(grades);
    
      console.log(average)
      console.log(`=${courseName} Grades=`);
      this.displayGrades(grades);
      
      if (average) {
        console.log('---');
        console.log(`Course Average: ${average}`);
      }
  },

  studentGrades(courseName) {
    const gradesObj = this.students.reduce((grades, student) => {
      const course = student.findCourseByName(courseName);

      if (course && course.grade) {
        grades[student.name] = course.grade;
      }

      return grades;
    }, {});

    return (Object.keys(gradesObj).length > 0) ? gradesObj : undefined;
  },

  calculateGradeAverage(grades) {
    let values = Object.values(grades);
    let sum = values.reduce((sum, grade) => sum + grade);
    
    return Math.round(sum / values.length);
  },

  displayGrades(grades) {
    for (let name in grades) {
      console.log(`${name}: ${grades[name]}`)
    }
  }
}



const math = { name: 'Math', code: 101 };
const advanceMath = { name: 'Advanced Math', code: 102 };
const physics = { name: 'Physics', code: 202 };


let foo = school.addStudent('foo', '3rd');
school.enrollStudent(foo.name, {...math});
school.enrollStudent(foo.name, {...advanceMath});
school.enrollStudent(foo.name, {...physics});
school.addGrade(foo.name, 101, 95);
school.addGrade(foo.name, 102, 90);
// school.getReportCard(foo.name);


let bar = school.addStudent('bar', '1st');
school.enrollStudent(bar.name, {...math});
school.addGrade(bar.name, 101, 91);
// school.getReportCard(bar.name);

let qux = school.addStudent('qux', '2nd');
school.enrollStudent(qux.name, {...math});
school.enrollStudent(qux.name, {...advanceMath});
school.addGrade(qux.name, 101, 93);
school.addGrade(qux.name, 102, 90);
// school.getReportCard(qux.name);


school.courseReport('Math');
// school.courseReport('Advanced Math');
// school.courseReport('Physics');


// > school.courseReport('Math');
// = =Math Grades=
// = foo: 95
// = bar: 91
// = qux: 93
// = ---
// = Course Average: 93

// > school.courseReport('Advanced Math');
// = =Advanced Math Grades=
// = foo: 90
// = qux: 90
// = ---
// = Course Average: 90

// > school.courseReport('Physics');
// = undefined