//Ans:1

//unary operator
let X = 5;
let Y = -X; // Unary negation
let a = "10";
let b = +a; // Unary plus (type conversion to number)
let count = 0;
count++; // Unary increment
console.log("Ans : 1 Unary increment ");
console.log("X = 5 then the value of X will be :  " + X);
console.log("Y = -X then the value of Y will be :  " + Y);
console.log("a = '10' then the value of a will be :  " + a);
console.log("b = +a then the value of b will be :  " + b);
console.log("count = 0; count ++; then the value of count will be :  " + count);

//binary operator
let num1 = 10;
let num2 = 5;
let sum = num1 + num2; // Addition
let difference = num1 - num2; // Subtraction
let product = num1 * num2; // Multiplication
let quotient = num1 / num2; // Division
console.log("binary operator ");
console.log("num1= 10; then the value of num1 will be :  " + num1);
console.log("num2= 5; then the value of num2 will be :  " + num2);
console.log("sum = num1 + num2; then the value of sum will be :  " + sum);
console.log(
  "difference = num1 - num2; then the value of difference will be :  " +
    difference
);
console.log(
  "product = num1 * num2; then the value of difference will be :  " + product
);
console.log(
  "quotient = num1 / num2; then the value of quotient will be :  " + quotient
);

console.log("Comparison : -");
let isGreater = num1 > num2; // Greater than comparison
let isEqual = num1 === num2; // Strict equality comparison
let logicalAnd = true && false; // Logical AND

console.log("isGreater " + isGreater);
console.log("isEqual " + isEqual);
console.log("logicalAnd " + logicalAnd);
//Ternary operator
let age = 18;
let isAdult = age >= 18 ? "Adult" : "Minor";
console.log(isAdult); // Outputs: "Adult" (if age is 18 or greater)

//ans:2

console.log("Ans : 2 Logical AND (&&) Short-Circuit Evaluation:");
//Logical AND (&&) Short-Circuit Evaluation:
let result = false && someFunction(); // someFunction() is not called
console.log("result " + result); // Outputs: false

console.log("Logical AND (&&) Short-Circuit Evaluation: ");
//Logical OR (||) Short-Circuit Evaluation:
let result1 = true || someFunction(); // someFunction() is not called
console.log("result1 " + result1); // Outputs: true

//ans:3
console.log("Ans : 3 JS Snippet Output ");
let x = 5;
let y = "10";
let z = x + y;
console.log("Output is " + z); //output 510

//ans:4
console.log("Ans : 4 Calculate the area using the formula: π * radius^2");
function calculateArea(radius) {
  // Calculate the area using the formula: π * radius^2
  const area = Math.PI * Math.pow(radius, 2);
  return area;
}

// Example usage
let radius = 5;
let circleArea = calculateArea(radius);
console.log(`The area of the circle with radius ${radius} is ${circleArea}`);

//ans:5

console.log("Ans : 5 Equality Operator (`==`):");
//Equality Operator (`==`):
console.log("5 == '5' " + (5 == "5")); // Outputs: true

console.log("Strict Equality Operator (===):");
//Strict Equality Operator (===):
console.log("5 === '5' " + (5 === "5")); // Outputs: false

console.log("//Examples with Different Types:");
//Examples with Different Types:
console.log("5 == '5' " + (5 == "5")); // Outputs: true
console.log("5 === '5' " + (5 === "5")); // Outputs: false

console.log("true == 1 " + (true == 1)); // Outputs: true
console.log("true === 1 " + (true === 1)); // Outputs: false

console.log("null == undefined " + (null == undefined)); // Outputs: true
console.log("null === undefined " + (null === undefined)); // Outputs: false

//ans:6
console.log("Ans : 6 Fahrenheit to celsius");
function fahrenheitToCelsius(fahrenheit) {
  // Conversion formula: (F - 32) * 5/9
  const celsius = (fahrenheit - 32) * (5 / 9);
  return celsius;
}

// Example usage
let fahrenheit = 32; // Change this value to the desired Fahrenheit temperature
let celsius = fahrenheitToCelsius(fahrenheit);
console.log(
  `${fahrenheit} Fahrenheit is equal to ${celsius.toFixed(2)} Celsius`
);
