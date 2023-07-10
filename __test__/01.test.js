const Taxicab = require("../01");

describe("No time for a taxicab", () => {
  test("Turn method updates direction correctly", () => {
    const taxi = new Taxicab();
    taxi.turn("R");
    expect(taxi.direction).toBe("east");
    taxi.turn("R");
    expect(taxi.direction).toBe("south");
  });
  test("blockMover method updates x position with a positive east direction", () => {
    const taxi = new Taxicab();
    taxi.blockMover(3, "east");
    expect(taxi.xPos).toBe(3);
    taxi.blockMover(2, "north");
    expect(taxi.yPos).toBe(2);
    expect(taxi.xPos).toBe(3);
  });
  test("blockMover method correctly places taxi when passed three commands the same", () => {
    const taxi = new Taxicab();
    taxi.blockMover(2, "east");
    taxi.blockMover(2, "south");
    taxi.blockMover(2, "west");
    expect(taxi.xPos).toBe(0);
    expect(taxi.yPos).toBe(-2);
  });
  test("singleInputHandler correctly places taxi when passed a single string of R2", () => {
    const taxi = new Taxicab();
    taxi.singleInputHandler("R2");
    expect(taxi.xPos).toBe(2);
    expect(taxi.direction).toBe("east");
    taxi.singleInputHandler("R2");
    taxi.singleInputHandler("R2");
    expect(taxi.xPos).toBe(0);
    expect(taxi.yPos).toBe(-2);
    expect(taxi.direction).toBe("west");
  });
  test("inputHandler takes an array of strings and correctly positions the taxi", () => {
    const taxi = new Taxicab();
    taxi.inputHandler(["R2", "L3"]);
    expect(taxi.xPos).toBe(2);
    expect(taxi.yPos).toBe(3);
  });
  test("blockCounter returns absolute distance with a small array", () => {
    const taxi = new Taxicab();
    const actual = taxi.blockCounter(["R2", "R2", "R2"]);
    expect(actual).toBe(2);
  });
  test("blockCounter returns absolute distance with a more complex array", () => {
    const taxi = new Taxicab();
    const input = ["R5", "L5", "R5", "R3"];
    const actual = taxi.blockCounter(input);
    expect(actual).toBe(12);
  });

});
