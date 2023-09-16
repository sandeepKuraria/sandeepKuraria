// toggle button to Mute Background game music
function toggleBgMute() {
  var gameBgAudio = document.getElementById("gameBgAudio");
  gameBgAudio.muted = !gameBgAudio.muted;
}
// toggle button to Mute Start game music
function togglestartMute() {
  var startAudio = document.getElementById("startAudio");
  startAudio.muted = !startAudio.muted;
}

// use button to suffle all buttons available, if you dont find any matching button from hint value
function suffle() {
  generateBtns();
  gameBgAudio();
}
// function to play game start music
function playStartAudio() {
  document.getElementById("startAudio").play();
}
playStartAudio();
// function to start background game music
function gameBgAudio() {
  document.getElementById("gameBgAudio").play();
}

// disabling ctrl+F to give security or to stop cheating in game
document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.key === "f") {
    document.getElementById("noCheat").innerHTML =
      "  Cheating nai, Garud puran me iske liye alag se saja hai...";
    e.preventDefault();
    // Hiding message after 3 seconds
    setTimeout(() => {
      document.getElementById("noCheat").innerHTML = "";
    }, 3000);
    return false;
  }
});

var hint = 0;
var score = 0;
var totalTimer = 60;

// function to generate new hint
function getNewHint() {
  hint = generateRandonNo();
  document.getElementById("hintVal").value = hint;
}
//function to generate buttons
function generateBtns() {
  let btns = "";
  let btnBox = document.querySelector(".btn-container");
  for (let i = 0; i < 140; i++) {
    btns += `<button class="btn btn-outline-warning text-dark border border-1 m-2 p-1 gameBtn rounded-circle" >${generateRandonNo()}</button>`;
    btnBox.innerHTML = btns;
  }
}
// function to generate random no
function generateRandonNo() {
  let rNo = Math.floor(Math.random() * 100);

  return rNo;
}
//selects first element where we need to create buttons as options to match them with hint value.
let btnBoxC = document.querySelector(".btn-container");

// eventlitstener to handle correct and incorrect clicks
btnBoxC.addEventListener("click", (e) => {
  console.log(e.target.innerText);

  if (e.target.innerText == hint) {
    getNewHint();
    generateBtns();
    addScore();
    // if correct then this will play audio for correctChoice id
    document.getElementById("correctChoice").play();
  } else {
    // if inCorrect then this will play audio for incorrectChoice id
    document.getElementById("inCorrectChoice").play();
    alert("Wrong Number");
    generateBtns();
    if (score > 0) {
      minusScore();
    }
  }
});
// function to add score if button is matched to hint value by 10
function addScore() {
  score = score + 10;
  document.getElementById("scoreVal").value = score;
}
// function to show game over alert when time's up
function gameOver() {
  alert(`Game Over With Score = ${score}`);
  console.log(`Game Over With Score = ${score}`);
  window.location.reload();
}
// function to minus score if button is not matched to hint value by 5
function minusScore() {
  score = score - 5;
  document.getElementById("scoreVal").value = score;
}
// function to run timer for 60 seconds and show Timeout
function runTimer() {
  var timeOut = setInterval(() => {
    if (totalTimer > 0) {
      totalTimer--;
      document.getElementById("timerVal").value = totalTimer;
    } else {
      clearInterval(timeOut);
      console.log("TimeOut");
      gameOver();
    }
  }, 1000);
}
// all required functions are called
playStartAudio();
gameBgAudio();
runTimer();
generateBtns();
getNewHint();
