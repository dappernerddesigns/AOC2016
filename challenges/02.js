const bathroomInstructions = (instrArr) => {
  const keyPad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  let row = 1;
  let col = 1;
  let lastRow = 1;
  let lastCol = 1;

  const moves = {
    U: () => {
      row -= 1;
    },
    D: () => {
      row += 1;
    },
    L: () => {
      col -= 1;
    },
    R: () => {
      col += 1;
    },
  };

  const codeArr = [];
  const stepArr = [];

  instrArr.forEach((instruction) => {
    const movesArr = instruction.split("");

    movesArr.forEach((step, index) => {
      moves[step]();

      if (row >= 0 && row <= 2 && col >= 0 && col <= 2) {
        stepArr.push(keyPad[row][col]);
        lastRow = row;
        lastCol = col;
      } else {
        row = lastRow;
        col = lastCol;
      }
      if (index === movesArr.length - 1) {
        codeArr.push(stepArr[stepArr.length - 1]);
        stepArr.length = 0;
      }
    });
  });

  const codeStr = codeArr.join("");
  return Number(codeStr);
};

const bathroomInstructionsPartTwo = (instrArr) => {
  const keys = [
    ["", "", 1, "", ""],
    ["", 2, 3, 4, ""],
    [5, 6, 7, 8, 9],
    ["", "A", "B", "C", ""],
    ["", "", "D", "", ""],
  ];
  let row = 2;
  let col = 0;
  let lastRow = 2;
  let lastCol = 0;

  const moves = {
    U: () => {
      row -= 1;
    },
    D: () => {
      row += 1;
    },
    L: () => {
      col -= 1;
    },
    R: () => {
      col += 1;
    },
  };

  const codeArr = [];
  const stepArr = [];

  instrArr.forEach((move) => {
    const movesArr = move.split("");
    movesArr.forEach((step, index) => {
      moves[step]();
      if (
        row >= 0 &&
        row <= 4 &&
        col >= 0 &&
        col <= 4 &&
        keys[row][col] !== ""
      ) {
        lastRow = row;
        lastCol = col;
        stepArr.push(keys[row][col]);
      } else {
        row = lastRow;
        col = lastCol;
      }
      if (index === movesArr.length - 1) {
        if (stepArr.length > 0) {
          codeArr.push(stepArr[stepArr.length - 1]);
        } else codeArr.push(keys[row][col]);
        stepArr.length = 0;
      }
    });
  });
  const codeStr = codeArr.join("");
  return codeStr;
};

module.exports = { bathroomInstructions, bathroomInstructionsPartTwo };

const fs = require("fs");

function getPuzzleLines({ numeric = false } = {}) {
  const txt = fs.readFileSync("../inputs/02_input.txt", "utf-8");
  const lines = txt.split("\n");
  return numeric ? lines.map((n) => +n) : lines;
}

const inputStr = getPuzzleLines();
console.log(bathroomInstructionsPartTwo(inputStr));
