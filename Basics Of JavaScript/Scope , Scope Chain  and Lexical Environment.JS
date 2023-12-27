// Scope , Scope Chain and Lexical Environment
// Scope is directly related to lexical environment.
function a() {
  console.log(b); // 10
}
var b = 10;
a();
