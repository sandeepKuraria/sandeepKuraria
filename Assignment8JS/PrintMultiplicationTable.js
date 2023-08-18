// : Multiplication Table
// Write a function printMultiplicationTable that takes a positive integer n as a parameter
// and prints the multiplication table for numbers from 1 to n

function printMultiplicationTable(n) {
  let result = 1;

  for (let j = 2; j <= n; j++) {
    for (let i = 1; i <= 10; i++) {
      result = j * i;
      console.log(result);
    }
    console.log("****************");
  }
}
const n = 5;
printMultiplicationTable(n);
