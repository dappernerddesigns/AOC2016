const {
  bathroomInstructions,
  bathroomInstructionsPartTwo,
} = require("../challenges/02");

describe("Bathroom Instructions", () => {
  test("Starting from 5 and an input of U returns 2", () => {
    expect(bathroomInstructions(["U"])).toBe(2);
  });
  test("Starting from 5 and an input of D returns 8", () => {
    expect(bathroomInstructions(["D"])).toBe(8);
  });
  test("Starting from 5 and an input of L returns 4", () => {
    expect(bathroomInstructions(["L"])).toBe(4);
  });
  test("Starting from 5 and an input of R returns 6", () => {
    expect(bathroomInstructions(["R"])).toBe(6);
  });
  test("Starting from 5 and an input of UL returns 1", () => {
    expect(bathroomInstructions(["UL"])).toBe(1);
  });
  test("Starting from 5 and an input of ULL returns 1", () => {
    expect(bathroomInstructions(["ULL"])).toBe(1);
  });
  test("Starting from 5 and an input of ULL RRDDD returns 19", () => {
    expect(bathroomInstructions(["ULL", "RRDDD"])).toBe(19);
  });
  test("Starting from 5 and an  input of ULL RRDDD LURDL returns 198", () => {
    expect(bathroomInstructions(["ULL", "RRDDD", "LURDL"])).toBe(198);
  });
  test("Starting from 5 and an  input of ULL RRDDD LURDL UUUUD returns 1985", () => {
    expect(bathroomInstructions(["ULL", "RRDDD", "LURDL", "UUUUD"])).toBe(1985);
  });
});

describe("Bathroom Instructions part 2", () => {
  test("Starting from 5, an input of U returns 5", () => {
    expect(bathroomInstructionsPartTwo(["U"])).toBe("5");
  });
  test("Starting from 5 and an input of D returns 5", () => {
    expect(bathroomInstructionsPartTwo(["D"])).toBe("5");
  });
  test("Starting from 5 and an input of L returns 5", () => {
    expect(bathroomInstructionsPartTwo(["L"])).toBe("5");
  });
  test("Starting from 5 and an input of R returns 6", () => {
    expect(bathroomInstructionsPartTwo(["R"])).toBe("6");
  });
  test("Starting from 5 and an input of UL returns 5", () => {
    expect(bathroomInstructionsPartTwo(["UL"])).toBe("5");
  });
  test("Starting from 5 and an input of ULL returns 5", () => {
    expect(bathroomInstructionsPartTwo(["ULL"])).toBe("5");
  });
  test("Starting from 5 and an input of ULL RRDDD returns 5D", () => {
    expect(bathroomInstructionsPartTwo(["ULL", "RRDDD"])).toBe("5D");
  });
  test("Starting from 5 and an  input of ULL RRDDD LURDL returns 5DB", () => {
    expect(bathroomInstructionsPartTwo(["ULL", "RRDDD", "LURDL"])).toBe("5DB");
  });
  test("Starting from 5 and an  input of ULL RRDDD LURDL UUUUD returns 5DB3", () => {
    expect(
      bathroomInstructionsPartTwo(["ULL", "RRDDD", "LURDL", "UUUUD"])
    ).toBe("5DB3");
  });
});
