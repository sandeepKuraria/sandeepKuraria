// Fibonacci Sequence
// Write a function generateFibonacci that takes a positive integer n as a parameter and
// generates the first n numbers in the Fibonacci sequence.

function generateFibonacci(n) {
  //0,1,2,3,5,8,13,21...
  const fibonacciSeries = [];
  if (n >= 1) {
    fibonacciSeries[0] = 0;
  }
  if (n >= 2) {
    fibonacciSeries[1] = 1;
  }
  for (let i = 2; i < n; i++) {
    fibonacciSeries[i] = fibonacciSeries[i - 2] + fibonacciSeries[i - 1];
  }
  return fibonacciSeries;
}

const n = 10;
console.log(generateFibonacci(n));
