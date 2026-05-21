// Global Scope 
// var a = 10;

// function globalScopeExample() {
//   console.log(a); // can access variable 'a' from global scope
// }

// globalScopeExample(); // output: 10
// // console.log(a); // output: 10

// Local Scope
// function localScopeExample() {
//   var b = 20; // 'b' is only accessible within this function
//   console.log(b); // output: 20
// }       
// localScopeExample();
// // console.log(b); // Uncaught ReferenceError: b is not defined

// Block Scope
// if (true) {
//   let c = 30; // 'c' is only accessible within this block
//   console.log(c); // output: 30
// }
// console.log(c); // Uncaught ReferenceError: c is not defined

// Function Scope
// function functionScopeExample() {
//   var d = 40; // 'd' is only accessible within this function
//   console.log(d); // output: 40
// }
// functionScopeExample();
// console.log(d); // Uncaught ReferenceError: d is not defined

// Lexical Scope
// function outerFunction() {
//   var e = 50; // 'e' is accessible in outerFunction and innerFunction
//   function innerFunction() {
//     console.log(e); // output: 50
//   }
//   innerFunction();   
// }
// outerFunction();
// console.log(e); // Uncaught ReferenceError: e is not defined 

scope = "Global Scope";

function checkScope() {
  var scope = "Local Scope";
  console.log(scope); // output: Local Scope
}


