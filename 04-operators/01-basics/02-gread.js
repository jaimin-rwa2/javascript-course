function calculateGrade(score, sub) {
    if (score >= 91  && score <= 100) {
      return `${sub} : A`;
    } else if (score >= 76 && score <= 90) {
      return `${sub} : B`;
    } else if (score >= 61 && score <= 75) {
      return `${sub} : C`;
    } else if (score >= 50 && score <= 60) {
      return `${sub} : D`;
    } else {
      return 'F';
    }
  }


let result = calculateGrade(91, "physics")
console.log(result);