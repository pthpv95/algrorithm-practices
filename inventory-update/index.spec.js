const { updateInventory } = require("./index");

describe("updateInventory function", () => {
  it("should return new updated inventory", () => {
    var curInv = [
      [21, "Bowling Ball"],
      [2, "Dirty Sock"],
      [1, "Hair Pin"],
      [5, "Microphone"]
    ];

    var newInv = [
      [2, "Hair Pin"],
      [3, "Half-Eaten Apple"],
      [67, "Bowling Ball"],
      [7, "Toothpaste"]
    ];
    expect(updateInventory(curInv, newInv).length).toEqual(6);
  });

  it("should expected result", () => {
    var curInv = [
      [21, "Bowling Ball"],
      [2, "Dirty Sock"],
      [1, "Hair Pin"],
      [5, "Microphone"]
    ];

    var newInv = [
      [2, "Hair Pin"],
      [3, "Half-Eaten Apple"],
      [67, "Bowling Ball"],
      [7, "Toothpaste"]
    ];
    const expectedResult = [
      [88, "Bowling Ball"],
      [2, "Dirty Sock"],
      [3, "Hair Pin"],
      [3, "Half-Eaten Apple"],
      [5, "Microphone"],
      [7, "Toothpaste"]
    ];
    expect(updateInventory(curInv, newInv)).toEqual(expectedResult);
  });
});
