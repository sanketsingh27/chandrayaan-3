const { moveChandrayaan } = require("../chandrayaan");

describe("move chandrayaan in (x,y,x) directions", () => {
  test("move chandrayaan function is defined", () => {
    expect(moveChandrayaan).toBeDefined();
  });

  test("move chandrayaan 1 unit forward when direction is 'N", () => {
    const initialConditions = {
      commands: ["f"],
      coordinates: [0, 0, 0],
      direction: "N",
    };

    const expected = {
      direction: "N",
      coordinates: [0, 1, 0],
    };

    expect(moveChandrayaan(initialConditions)).toStrictEqual(expected);
  });

  test("move chandrayaan 1 unit forward when direction is 'E", () => {
    const initialConditions = {
      commands: ["f"],
      coordinates: [0, 0, 0],
      direction: "E",
    };

    const expected = {
      direction: "E",
      coordinates: [1, 0, 0],
    };

    expect(moveChandrayaan(initialConditions)).toStrictEqual(expected);
  });
});
