// Sum of Numbers
// Write a for loop that calculates and prints the sum of numbers from 1 to 100.

function sumOfNumbers() {
  let result = 0;
  for (let i = 1; i <= 100; i++) {
    result = i + result;
  }
  console.log(result);
}

sumOfNumbers();
