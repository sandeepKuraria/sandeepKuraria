// Factorial
// Write a for loop that calculates and prints the factorial of a given number (e.g., 5 factorial
// = 5! = 5 * 4 * 3 * 2 * 1)

function factorialOfNumber(n) {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
  }
  console.log(factorial);
}
const n = 5;
factorialOfNumber(n);
