const EXAM_WEIGHT = .65;
const EXERCISE_WEIGHT = .35;

let allStudentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(allScores) {
  let studentScores = Object.values(allScores);

  return {
    studentGrades: calcFinalGrades(studentScores),
    exams: calcExamStats(studentScores),
  }
}

function calcFinalGrades(studentScores) {
  return studentScores.map(student => calcStudentGrade(student.scores));
}

function calcStudentGrade({ exams, exercises }) {
  let avgExamScore = calcAvgExamScore(exams);
  let totExerciseScore = calcTotExerciseScore(exercises);
  let weightedScore = calcWeightedScore(avgExamScore, totExerciseScore);
  let letterGrade = determineLetterGrade(weightedScore);

  return `${weightedScore} (${letterGrade})`
}

function calcAvgExamScore(exams) {
  let sum = exams.reduce((sum, score) => sum + score);
  let avg = sum / exams.length;
  return avg;
}

function calcTotExerciseScore(exercises) {
  return exercises.reduce((sum, exercise) => sum + exercise);
}

function calcWeightedScore(examScore, exerciseScore) {
  return Math.round(examScore * EXAM_WEIGHT + exerciseScore * EXERCISE_WEIGHT);
}

function determineLetterGrade(score) {
  if (score > 93) return 'A';
  if (score > 85) return 'B';
  if (score > 77) return 'C';
  if (score > 69) return 'D';
  if (score > 60) return 'E';
  if (score > 0)  return 'F';
}

function calcExamStats(studentScores) {
  let examScores = studentScores.map(student => student.scores.exams);
  let scoresByExam = groupByExam(examScores);
  
  return scoresByExam.map(exams => {
    return {
      average: calcAvgExamScore(exams),
      minimum: Math.min(...exams),
      maximum: Math.max(...exams),
    }
  })
}

function groupByExam(exams) {
  return exams.reduce((orderedExams, examScores) => {
    orderExams(examScores, orderedExams);
    return orderedExams;
  }, []);
}

function orderExams(examScores, orderedExams) {
  examScores.forEach((examScore, index) => {
    if (!orderedExams[index]) {
      orderedExams[index] = [];
    } 

    orderedExams[index].push(examScore);
  });
}


console.log(generateClassRecordSummary(allStudentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }