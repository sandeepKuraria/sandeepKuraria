function textMatching() {
  const m = document.getElementById("para1").textContent;

  const nContent = document.getElementById("para2");

  const n = prompt("Enter the para2");

  let result = "";

  for (let i = 0; i < Math.max(m.length, n.length); i++) {
    if (m[i] === n[i]) {
      result += m[i];
    } else {
      if (m.length !== n.length) {
        document.getElementById("message").innerHTML = message1;
      }
      if (n[0] === " ") {
        document.getElementById("message").innerHTML = message2;
      }
      if (m[i] !== n[i] && m.length === n.length) {
        document.getElementById("message").innerHTML =
          "wrong character in the paragraph.";
      }
      result += `<span style='color: red;'>${n[i] || " "}</span>`;
    }
  }

  nContent.innerHTML = result;
}

const message1 =
  "Maybe you are missing some characters or adding extra characters or words in the paragraph.";
const message2 =
  "You should not start the matching paragraph with empty string or space.";
