const {
  validTrianglesPartOne,
  validTrianglesColumns,
} = require("../challenges/03.js");

describe("Valid triangles", () => {
  test("Given an array of 5,10,12 return a count of 1", () => {
    expect(validTrianglesPartOne([[5, 10, 12]])).toBe(1);
  });
  test("Given an array of 5,10,25 return a count of 0", () => {
    expect(validTrianglesPartOne([[5, 10, 25]])).toBe(0);
  });
  test("Given an array of [[5,10,12],[5,10,25]] returns 1", () => {
    expect(
      validTrianglesPartOne([
        [5, 10, 12],
        [5, 10, 25],
      ])
    ).toBe(1);
  });
});

describe("Valid triangle columns", () => {
  test("Given an array of three valid columns, return 3", () => {
    const input = [
      [5, 5, 5],
      [10, 10, 10],
      [12, 12, 12],
    ];
    expect(validTrianglesColumns(input)).toBe(3);
  });
  test("Given a larger array", () => {
    const input = [
      [541, 588, 421],
      [827, 272, 126],
      [660, 514, 367],
      [39, 703, 839],
      [229, 871, 3],
      [237, 956, 841],
      [898, 566, 112],
      [101, 79, 112],
      [813, 541, 146],
    ];
    expect(validTrianglesColumns(input)).toBe(9);
  });
});
