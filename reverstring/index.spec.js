const { reverseString } = require(".");

describe("reversestring", () => {
  it("should return reserved string", () => {
    expect(reverseString("hello")).toEqual("olleh");
  });
});
