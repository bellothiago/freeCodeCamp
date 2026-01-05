function getAverage(testScores) {
  let sum = 0;
  for (let score of testScores) {
    sum += score;
  }
  let average = sum / testScores.length;
  return average;
}

function getGrade(score) {
  switch (true) {
    case score === 100:
      return "A+";
    case score >= 90 && score <= 99:
      return "A";
    case score >= 80 && score <= 89:
      return "B";
    case score >= 70 && score <= 79:
      return "C";
    case score >= 60 && score <= 69:
      return "D";
    case score >= 0 && score <= 59:
      return "F";
  }
}

function hasPassingGrade(score) {
  if (getGrade(score) == "F") {
    return false;
  } else {
    return true;
  }
}

function studentMsg(scoresArr, score) {
  if (hasPassingGrade(score)) {
    return `Class average: ${getAverage(scoresArr)}. Your grade: ${getGrade(score)}. You passed the course.`
  } else {
    return `Class average: ${getAverage(scoresArr)}. Your grade: ${getGrade(score)}. You failed the course.`
  }
}