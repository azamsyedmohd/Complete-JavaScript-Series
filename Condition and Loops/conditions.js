var score = 92;

if (score > 90) {
  console.log("Hurrah! We got a bicycle");
} else {
  console.log("Better luck next time!");
}

// 90-100 - Grade A
// 70-89 - Grade B
// 50-69 - Grade C
// lower than 50 - Grade F

var studentScore = 95;

if (studentScore >= 90) {
  console.log("Student Grade is A ");
} else if (studentScore >= 70 && studentScore <= 89) {
  console.log("Student Grade is B ");
} else if (studentScore >= 50 && studentScore <= 69) {
  console.log("Student Grade is C");
} else {
  console.log("Student Grade is F(Fail)");
}
