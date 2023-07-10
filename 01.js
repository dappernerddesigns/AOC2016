// The Document indicates that you should start at the given coordinates (where you just landed) and face North. Then, follow the provided sequence: either turn left (L) or right (R) 90 degrees, then walk forward the given number of blocks, ending at a new intersection.

// There's no time to follow such ridiculous instructions on foot, though, so you take a moment and work out the destination. Given that you can only walk on the street grid of the city, how far is the shortest path to the destination?

// For example:

// Following R2, L3 leaves you 2 blocks East and 3 blocks North, or 5 blocks away.
// R2, R2, R2 leaves you 2 blocks due South of your starting position, which is 2 blocks away.
// R5, L5, R5, R3 leaves you 12 blocks away.

class TaxiCab {
  constructor() {
    this.direction = "north";
    this.xPos = 0;
    this.yPos = 0;
    this.possibleDirections = {
      north: { L: "west", R: "east" },
      south: { L: "east", R: "west" },
      east: { L: "north", R: "south" },
      west: { L: "south", R: "north" },
    };
  }
  turn(direction) {
    const newFacing = this.possibleDirections[this.direction][direction];
    this.direction = newFacing;
    return this.direction;
  }

  blockMover(count, direction) {
    if (direction === "east") {
      return (this.xPos += count);
    } else if (direction === "north") {
      return (this.yPos += count);
    } else if (direction === "south") {
      return (this.yPos -= count);
    } else {
      return (this.xPos -= count);
    }
  }

  singleInputHandler(inputStr) {
    const block = Number(inputStr.slice(1));
    const direction = this.turn(inputStr[0]);
    this.blockMover(block, direction);
  }

  inputHandler(inputArr) {
    inputArr.forEach((input) => {
      this.singleInputHandler(input);
    });
  }

  blockCounter(inputArr) {
    this.inputHandler(inputArr);
    const distance = Math.abs(this.xPos) + Math.abs(this.yPos);
    return distance;
  }
}

const fs = require("fs");

function getPuzzleLines({ numeric = false } = {}) {
  const txt = fs.readFileSync("01_input.txt", "utf-8");
  const lines = txt.split("\n");
  return numeric ? lines.map((n) => +n) : lines;
}

const inputStr = getPuzzleLines();
const inputArr = inputStr[0].split(", ");

const taxi = new TaxiCab();
console.log(taxi.blockCounter(inputArr));
module.exports = TaxiCab;
