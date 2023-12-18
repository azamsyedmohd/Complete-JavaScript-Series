// for-of loop

// The for of statement creates a loop iterating over iterable objects.
// including built-in strings, array, array-like objects like Nodelist and also map and set.

const scores = [60, 90, 80, 75];

for (const score of scores) {
  console.log(score);
}

for (const [index, score] of scores.entries()) {
  console.log("Index : " + index + " Score is : " + score);
}

console.log("***********************");
const stringArray = "Scalar Academy";

for (const alphabet of stringArray) {
  console.log(alphabet);
}
console.log("*******************");
