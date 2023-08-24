function reverseNumber(n) {
  const array = n.toString().split("");
  const reverse = array.reverse().join("");
  console.log("Reversed Number is : " + reverse);
}
const n = prompt("Enter a number:");
reverseNumber(n);
