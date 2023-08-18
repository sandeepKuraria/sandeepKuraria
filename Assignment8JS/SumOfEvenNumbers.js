//creating function with parameter n
function sumOfEvenNumbers(n) {
  sum = 0;
  for (let i = 2; i <= n; i += 2) {
    sum += i;
  }
  return sum;
}
//passing the value of n
const n = 8;
//creating variable to call function
const result = sumOfEvenNumbers(n);
console.log(`The sum of even numbers from 1 to ${n} is ${result}`);
