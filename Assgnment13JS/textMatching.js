function textMatching() {
  document.getElementById("para1").innerHTML = m;
  document.getElementById("para2").innerHTML = n;
  let result = "";

  for (let i = 0; i < Math.max(m.length, n.length); i++) {
    if (m[i] === n[i]) {
      result += m[i];
    } else {
      // result = document.getElementById("para2").innerHTML = "";
      result += `<span style='color: red;'>${n[i] || " "}</span>`;

      //   document.getElementById("para2").style.color = "red";
    }
  }
  document.getElementById("para2").innerHTML = result;
}
const m = prompt("Enter the para1");
const n = prompt("Enter the para2");
