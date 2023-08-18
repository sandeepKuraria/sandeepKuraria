//Print table for 5 using do while

function multiplicationTable(n) {
  let i = 1;
  let result = 1;
  do {
    result = n * i;
    i++;
    console.log(result);
  } while (i <= 10);
}
const n = 5;
multiplicationTable(n);
