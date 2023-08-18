function factorial(n) {
  let f = 1;
  for (let i = 1; i <= n; i++) {
    f = f * i;
  }
  console.log(f);
}

const n = 5;
factorial(n);
