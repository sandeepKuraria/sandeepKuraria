function reverseString(inputString) {
  return inputString.split("").reverse().join("");
}

const input = "Hello, Sandy!";
const result = reverseString(input);
console.log(
  `original string is ${input} and reversed string will be ${result}`
);
