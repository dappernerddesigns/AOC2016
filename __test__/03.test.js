const validTriangles = require("../challenges/03.js");

describe("Valid triangles", () => {
  test("Given an array of 5,10,12 return a count of 1", () => {
    expect(validTriangles([[5, 10, 12]])).toBe(1);
  });
  test("Given an array of 5,10,25 return a count of 0", () => {
    expect(validTriangles([[5, 10, 25]])).toBe(0);
  });
  test("Given an array of [[5,10,12],[5,10,25]] returns 1", () => {
    expect(
      validTriangles([
        [5, 10, 12],
        [5, 10, 25],
      ])
    ).toBe(1);
  });
});
