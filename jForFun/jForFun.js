function getTheDate() {
  const sendingDateData = new Date();
  //.innerHTML changes the html inner content
  document.getElementById("jForFun").innerHTML = sendingDateData;
}

function checkSentence() {
  //.textContent reads from the html inner content
  const readingData1 = document.getElementById("readParagraph1").textContent;
  const readingData2 = prompt("Enter the sentence to be matched.");

  for (let i = 0; i < readingData1.length; i++) {
    if (readingData1[i] === readingData2[i]) {
      document.getElementById("sentenceMatch").innerHTML = "true";
    } else {
      document.getElementById("sentenceMatch").innerHTML = "false";
    }
  }
  document.getElementById("readParagraph2").innerHTML = readingData2;
}
