function arrayOfNumber(n) {
  let maxNumber = n[0];

  for (let i = 1; i < n.length; i++) {
    if (n[i] > maxNumber) {
      maxNumber = n[i];
    }
  }
  console.log("MaxNumber is : " + maxNumber);
}
const n = [10, 110, 100, 20, 120, 30, 40, 50];
arrayOfNumber(n);
