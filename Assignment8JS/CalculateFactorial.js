function calculateFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
      factorial *= i;
    }
    return factorial;
  }
}

const n = 4;
const result = calculateFactorial(n);
console.log(`The factorial of ${n} is ${result}`);
