const { permALone, factorial } = require("./index");

describe("permALone algorithm", () => {
  // it("should return a number", () => {
  //   expect(typeof permALone("aba")).toBe("number");
  // });
  //
  // it("should return false", () => {
  //   expect(permALone("aab")).toEqual(2);
  // });
});

describe("factorial", () => {
  it("should return factorial num of 3 is 6", () => {
    expect(factorial(3)).toEqual(6);
  });
  it("should return factorial num of 4 is 24", () => {
    expect(factorial(4)).toEqual(24);
  });

  it("should return factorial num of 0 is 1", () => {
    expect(factorial(0)).toEqual(1);
  });
});
