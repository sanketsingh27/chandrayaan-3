const { moveChandrayaan } = require("../chandrayaan");

describe("move chandrayaan in (x,y,x) directions", () => {
  test("move chandrayaan function is defined", () => {
    expect(moveChandrayaan).toBeDefined();
  });
});
