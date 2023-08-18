function testVariables() {
  console.log(a);
  if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
  }
  console.log(a);
  console.log(b); // What will be the output? console.log(c); // What will be the output?
}

testVariables();
