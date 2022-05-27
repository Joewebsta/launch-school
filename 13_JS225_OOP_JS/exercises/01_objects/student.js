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


let foo = createStudent('Foo', '1st');
// foo.info();
// "Foo is a 1st year student"
// foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
// foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
// foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
// foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course; Funnier teacher; Cool experiments');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"