const { sym } = require("./index");

describe("sym function", () => {
  it("should return [3,4,5]", () => {
    expect(sym([1, 2, 3], [5, 2, 1, 4])).toEqual([3, 4, 5]);
  });

  it("should contains only three elements", () => {
    const result = sym([1, 2, 3], [5, 2, 1, 4]);
    expect(result.length).toEqual(3);
  });

  it("should return [3,4,5]", () => {
    expect(sym([1, 2, 3, 3], [5, 2, 1, 4])).toEqual([3, 4, 5]);
  });

  it("should return [1,4,5]", () => {
    expect(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])).toEqual([1, 4, 5]);
  });
});
