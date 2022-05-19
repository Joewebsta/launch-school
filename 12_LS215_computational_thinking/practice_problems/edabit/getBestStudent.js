/*

Given an object with students and the grades that they made on the tests that they took, determine which student has the best Test Average. The key will be the student's name and the value will be an array of their grades. You will only have to return the student's name. You do not need to return their Test Average.

Examples
getBestStudent({
  John: [100, 90, 80],
  Bob: [100, 70, 80]
}) ➞ "John"

// John's avg = 90
// Bob's avg = 83.33

getBestStudent({
  Susan: [67, 84, 75, 63],
  Mike: [87, 98, 64, 71],
  Jim: [90, 58, 73, 86]
}) ➞ "Mike"


Notes
All students in an object will have the same amount of test scores. So no student will have taken more tests than another.

2C 
- modify input
- invalid inputs
- missing arguments?

INPUT
- an object
  - keys - student name
  - val - array
    - array contains test scores

OUTPUT
 - name of student with best average grade

RULES
- Best test average
  - Bonus
    - if less than 4 grades in array, return average of exisiting scores
    - if more than 3 grades in array, return best average of any 3 scores

- Number of grades in array will be consistent across all students

- Grades array
  - may contain 1 grade
  - may contain 1+ grades

- 

TEST CASES - PROVIDED --------------------------------

getBestStudent({
  John: [100, 90, 80],
  Bob: [100, 70, 80]
}) ➞ "John"

// John's avg = 90
// Bob's avg = 83.33

getBestStudent({
  Susan: [67, 84, 75, 63],
  Mike: [87, 98, 64, 71],
  Jim: [90, 58, 73, 86]
}) ➞ "Mike"

TEST CASES - ADDITIONAL --------------------------------


DATA STRUCTURE/ALGO

- getBestStudent(obj)

- 1. determine average of grades (helper)
  - calcGradeAvg(grades)
  - set numGrades to total num elements in grades array
  - set sum to 0
  - iterate over each grade in grades
    - add grade value to sum
  - return sum / numGrades

- 2. determine student with the highest average
  - determine highest average grade
    - set allGrades to array that contains all grade arrays - Object.values
    - tranform subArrays to averages
    - find max average grade
  - iterate over each key in obj
    - return name of student whose average is equal to max average
*/

function getBestStudent(grades) {
  let allGrades = Object.values(grades)
  let allGradeAverages = allGrades.map(calcGradeAvg);
  let maxGrade = Math.max(...allGradeAverages);

  for (let key in grades) {
    let gradesArr = grades[key];
    if (maxGrade === calcGradeAvg(gradesArr)) {
      return key;
    }
  }
}

function calcGradeAvg(grades) {
  let numGrades = grades.length;
  let sum = grades.reduce((sum, grade) => sum + grade, 0);
  return sum / numGrades;
}

getBestStudent({
  John: [100, 90, 80],
  Bob: [100, 70, 80]
}) 
// ➞ "John"

// John's avg = 90
// Bob's avg = 83.33

getBestStudent({
  Susan: [67, 84, 75, 63],
  Mike: [87, 98, 64, 71],
  Jim: [90, 58, 73, 86]
}) 
// ➞ "Mike"