// Block-Scope And Shadowing

// Block is basically a pair of curly braces which is used to combine the compound statements.

// Why we need a block? Basically whenever JavaScript Engine expects a single statement to execute but we want to execute multiple statements instead of single statement then we combine those statements inside the block.

{
  var a = 10; // Global Variable
  let b = 20; // Local Variable
  const c = 30; // Local Variable
  console.log(a); // 10
  console.log(b); // 20
  console.log(c); //30
}
console.log(a); // 10
console.log(b); // b is not defined
console.log(c); // c is not defined

// This is the reason why variables declared with let and const are blocked scoped.
