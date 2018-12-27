const { palindrome } = require("./index");

describe("check is palindrome string", () => {
  it("should return true", () => {
    expect(palindrome("12321")).toBe(true);
  });

  it("should return false", () => {
    expect(palindrome("1234")).toBe(false);
  });
});
