// print Fibonacci series for given number

function fibonacciSeries(n) {
  const fibonacci = [];
  if (n >= 1) {
    fibonacci[0] = 0;
  }
  if (n >= 2) {
    fibonacci[1] = 1;
  }
  for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  return fibonacci;
}
const n = 15;
console.log(fibonacciSeries(n));
