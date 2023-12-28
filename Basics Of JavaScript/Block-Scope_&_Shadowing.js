// Block-Scope And Shadowing

// Block is basically a pair of curly braces which is used to combine the compound statements.

// Why we need a block? Basically whenever JavaScript Engine expects a single statement to execute but we want to execute multiple statements instead of single statement then we combine those statements inside the block.
var a = 100;
let b = 45;
const c = 34;
{
  var a = 10; // Global Variable
  let b = 20; // Local Variable
  const c = 30; // Local Variable
  console.log(a); // 10
  console.log(b); // 20
  console.log(c); //30
}
console.log(a); // 10
console.log(b); // 45
console.log(c); // 34
// This is known as Shadowing.

console.log("***************************");
const val = 34;
{
  const val = 56;
  {
    const val = 78;
    console.log(val); // 78
  }
  console.log(val); // 56
}
console.log(val); // 34

console.log("************************");
const value = 56;
{
  {
    console.log(value); // 56
  }
  console.log(value); // 56
}
console.log(value); // 56
