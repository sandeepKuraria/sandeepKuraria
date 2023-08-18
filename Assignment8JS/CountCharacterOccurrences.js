// Count Character Occurrences
// Write a function countCharacterOccurrences that takes a string and a character as
// parameters and returns the number of times the character appears in the string.

function countCharacterOccurrences(nLower, chLower) {
  let count = 0;
  for (let i = 0; i < nLower.length - 1; i++) {
    if (chLower === nLower[i]) {
      count++;
    }
  }
  return count;
}
const n = "Saaandy";
const character = "A";
const nLower = n.toLocaleLowerCase();
const chLower = character.toLocaleLowerCase();
console.log(countCharacterOccurrences(nLower, chLower));
