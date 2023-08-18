function fibbonaciSeries(n) {
  let arr = [""];
  if (n >= 1) {
    arr[0] = 0;
  }
  if (n >= 2) {
    arr[1] = 1;
  }
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }
  console.log(arr);
}
const n = 10;
fibbonaciSeries(n);
