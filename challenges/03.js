const validTriangles = (inputArr) => {
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

module.exports = validTriangles;

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

console.log(validTriangles(inputNumbs));
