// Scope,Scope Chain and Lexical Environment.
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

// There are two things. First is scope of a variable and secone one is the variable is under the scope of a particular block or a function or not.

// As we know that, whenever we execute the JavaScript Code, the execution Context is created. And further we execute the block or function its execution context is also created. So, to keep track of these execution contexts, we have a call stack. As the execution context is created, the lexical environment is also created.

// Lexical Environment is combination of local memory + lexical environment of its parent, similarly a chain is created known as scope chain. Once the whole chain is finished, the variable is not found it means that the variable is not defined.
