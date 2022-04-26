function getGrade(...grades) {
  let gradeTotal = grades.reduce((total, grade) => total + grade);
  let avg = gradeTotal / grades.length;

  if (avg >= 90) return 'A';
  if (avg >= 80) return 'B';
  if (avg >= 70) return 'C';
  if (avg >= 60) return 'D';
  return 'F';
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"