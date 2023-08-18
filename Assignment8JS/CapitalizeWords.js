// Capitalize Words
// Write a function capitalizeWords that takes a sentence as a parameter and returns the
// sentence with the first letter of each word capitalized

function capitalizeWords(sentence) {
  const words = sentence.split(" ");
  let capitalizedSentence = "";

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const firstLetter = word[0].toUpperCase();
    const restOfTheWord = word.slice(1).toLowerCase();
    const capitalizedWord = firstLetter + restOfTheWord;

    capitalizedSentence += capitalizedWord;

    if (i !== words.length - 1) {
      capitalizedSentence += " ";
    }
  }
  return capitalizedSentence;
}
const n = "hey this is sandy.";
console.log(capitalizeWords(n));
