const validTrianglesPartOne = (inputArr) => {
  let count = 0;

  inputArr.forEach((triangle) => {
    const sideOne = triangle[0] + triangle[1];
    const sideTwo = triangle[1] + triangle[2];
    const sideThree = triangle[2] + triangle[0];
    if (
      sideOne > triangle[2] &&
      sideTwo > triangle[0] &&
      sideThree > triangle[1]
    )
      count++;
  });
  return count;
};
const validTriangles = (triangle) => {
  const sideOne = triangle[0] + triangle[1];
  const sideTwo = triangle[1] + triangle[2];
  const sideThree = triangle[2] + triangle[0];
  if (
    sideOne > triangle[2] &&
    sideTwo > triangle[0] &&
    sideThree > triangle[1]
  ) {
    return true;
  }

  return false;
};

const validTrianglesColumns = (inputArr) => {
  let count = 0;
  for (let i = 0; i < inputArr.length; i += 3) {
    const colOne = [inputArr[i][0], inputArr[i + 1][0], inputArr[i + 2][0]];
    const colTwo = [inputArr[i][1], inputArr[i + 1][1], inputArr[i + 2][1]];
    const colThree = [inputArr[i][2], inputArr[i + 1][2], inputArr[i + 2][2]];

    const possibleTriangles = [colOne, colTwo, colThree];

    possibleTriangles.forEach((input) => {
      if (validTriangles(input)) {
        count++;
      }
    });
  }
  return count;
};

module.exports = { validTrianglesPartOne, validTrianglesColumns };

const fs = require("fs");

function getPuzzleLines() {
  const txt = fs.readFileSync("../inputs/03_input.txt", "utf-8");
  const lines = txt.split("\n");
  const output = [];
  lines.forEach((string) => {
    const strings = string.split(",");
    const numbArr = strings[0].split(" ");
    const noWhiteSpace = numbArr.filter((element) => {
      if (element !== "") {
        return element;
      }
    });
    output.push(noWhiteSpace);
  });
  return output;
}

const inputStr = getPuzzleLines();
const inputNumbs = inputStr.map((arr) => {
  return [Number(arr[0]), Number(arr[1]), Number(arr[2])];
});

console.log(inputNumbs.length * 3);
