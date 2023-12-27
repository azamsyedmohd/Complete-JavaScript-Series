// Scope , Scope Chain and Lexical Environment.
// Scope is directly related to lexical environment.
function a() {
  c();
  function c() {
    console.log(b); // 10.
  }
}
var b = 10;
a();
