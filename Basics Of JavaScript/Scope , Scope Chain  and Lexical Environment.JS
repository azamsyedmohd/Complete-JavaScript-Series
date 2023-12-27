// Scope , Scope Chain and Lexical Environment.
// Scope is directly related to lexical environment.
function a() {
  var b = 10;
  c();
  function c() {
    console.log(b); // 10.
  }
}
a();
console.log(b); // b is not defined.
