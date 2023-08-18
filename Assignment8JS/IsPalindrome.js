// Palindrome Check
// Write a function isPalindrome that takes a string as a parameter and returns true if the
// string is a palindrome (reads the same forwards and backwards), and false otherwise.

function isPalindrome(n) {
  let i = 0;
  if (n[i] == n[n.length - 1]) {
    n.length--;
    i++;
    console.log(true);
  } else {
    console.log(false);
  }
}

const n = "hannah";
isPalindrome(n);
