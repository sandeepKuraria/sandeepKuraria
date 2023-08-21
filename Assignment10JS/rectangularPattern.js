//initialising variable asterisksRectangular with empty string
let asterisksRectangular = "";
//declaring function rectangularPattern and passing row and column as parameters and printing asterisks in a matrix form
function rectangularPattern(row, column) {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      asterisksRectangular = asterisksRectangular + "* ";
    }
    //giving linebreak
    asterisksRectangular += "\n";
  }
  console.log(asterisksRectangular);
}

//initialising variable asterisksHollowRectangular with empty string
let asterisksHollowRectangular = "";
//declaring function rectangularHollowPattern and passing row and column as parameters and printing asterisks in a matrix form
function rectangularHollowPattern(row, column) {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      //creating if else condition to print * in case of start and end place in a matrix and empty string in mid indexes for example 11 12 13
      if (i === 0 || i === row - 1 || j === 0 || j === column - 1) {
        asterisksHollowRectangular = asterisksHollowRectangular + "* ";
      } else {
        // (i === 1 && j === 1) ||
        // (i === 1 && j === 2) ||
        // (i === 1 && j === 3)
        asterisksHollowRectangular = asterisksHollowRectangular + "  ";
      }
    }
    //giving linebreak
    asterisksHollowRectangular += "\n";
  }
  console.log(asterisksHollowRectangular);
}

const row = 3;
const column = 5;
//calling solid asterisks rectangular pattern
rectangularPattern(row, column);
console.log("----------------------------------------------------------------");
//calling hollow asterisks rectangular pattern
rectangularHollowPattern(row, column);
