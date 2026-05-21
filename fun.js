//basic Syntax

function functionName() {
  console.log("Hello World");
}

functionName(); // calling the function



// function with parameters
function greet(name) {
  console.log("Hello " + name);
}   
greet("Alice"); // calling the function with an argument



// function with return value
function add(a, b) {
  return a + b;
}       
let sum = add(5, 3); // calling the function and storing the return value
console.log(sum); // output: 8



// function expression
const multiply = function(x, y) {
  return x * y;
};  
let product = multiply(4, 6); // calling the function expression
console.log(product); // output: 24

// arrow function
const divide = (a, b) => {
  return a / b;
};
let quotient = divide(10, 2); // calling the arrow function
console.log(quotient); // output: 5
