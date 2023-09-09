function appendToInputBox(value) {
  document.getElementById("inputBox").value += value;
}

function calculateResult() {
  let result = eval(document.getElementById("inputBox").value);
  document.getElementById("inputBox").value = result;
}
function allClearDisplay() {
  document.getElementById("inputBox").value = "";
}
function del() {
  let display = document.getElementById("inputBox");
  let currentValue = display.value;

  if (currentValue.length > 0) {
    display.value = currentValue.slice(0, -1);
  }
}
