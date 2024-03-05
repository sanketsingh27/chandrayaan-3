const { moveChandrayaan } = require("../chandrayaan");

describe("chandrayaan forward in (x,y,x) directions", () => {
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

  test("move chandrayaan 1 unit forward when direction is 'S", () => {
    const initialConditions = {
      commands: ["f"],
      coordinates: [0, 0, 0],
      direction: "S",
    };

    const expected = {
      direction: "S",
      coordinates: [0, -1, 0],
    };

    expect(moveChandrayaan(initialConditions)).toStrictEqual(expected);
  });

  test("move chandrayaan 1 unit forward when direction is 'W", () => {
    const initialConditions = {
      commands: ["f"],
      coordinates: [0, 0, 0],
      direction: "W",
    };

    const expected = {
      direction: "W",
      coordinates: [-1, 0, 0],
    };

    expect(moveChandrayaan(initialConditions)).toStrictEqual(expected);
  });

  test("move chandrayaan 1 unit forward when direction is 'U", () => {
    const initialConditions = {
      commands: ["f"],
      coordinates: [0, 0, 0],
      direction: "U",
    };

    const expected = {
      direction: "U",
      coordinates: [0, 0, 1],
    };

    expect(moveChandrayaan(initialConditions)).toStrictEqual(expected);
  });

  test("move chandrayaan 1 unit forward when direction is 'D", () => {
    const initialConditions = {
      commands: ["f"],
      coordinates: [0, 0, 0],
      direction: "D",
    };

    const expected = {
      direction: "D",
      coordinates: [0, 0, -1],
    };

    expect(moveChandrayaan(initialConditions)).toStrictEqual(expected);
  });
});

describe("chandrayaan backward in (x,y,x) directions", () => {
  test("move chandrayaan 1 unit backward when direction is 'N", () => {
    const initialConditions = {
      commands: ["b"],
      coordinates: [0, 0, 0],
      direction: "N",
    };

    const expected = {
      direction: "N",
      coordinates: [0, -1, 0],
    };

    expect(moveChandrayaan(initialConditions)).toStrictEqual(expected);
  });

  test("move chandrayaan 1 unit backward when direction is 'E", () => {
    const initialConditions = {
      commands: ["b"],
      coordinates: [0, 0, 0],
      direction: "E",
    };

    const expected = {
      direction: "E",
      coordinates: [-1, 0, 0],
    };

    expect(moveChandrayaan(initialConditions)).toStrictEqual(expected);
  });

  test("move chandrayaan 1 unit backward when direction is 'S", () => {
    const initialConditions = {
      commands: ["b"],
      coordinates: [0, 0, 0],
      direction: "S",
    };

    const expected = {
      direction: "S",
      coordinates: [0, 1, 0],
    };

    expect(moveChandrayaan(initialConditions)).toStrictEqual(expected);
  });

  test("move chandrayaan 1 unit backward when direction is 'W", () => {
    const initialConditions = {
      commands: ["b"],
      coordinates: [0, 0, 0],
      direction: "W",
    };

    const expected = {
      direction: "W",
      coordinates: [1, 0, 0],
    };

    expect(moveChandrayaan(initialConditions)).toStrictEqual(expected);
  });

  test("move chandrayaan 1 unit backward when direction is 'U", () => {
    const initialConditions = {
      commands: ["b"],
      coordinates: [0, 0, 0],
      direction: "U",
    };

    const expected = {
      direction: "U",
      coordinates: [0, 0, -1],
    };

    expect(moveChandrayaan(initialConditions)).toStrictEqual(expected);
  });

  test("move chandrayaan 1 unit backward when direction is 'D", () => {
    const initialConditions = {
      commands: ["b"],
      coordinates: [0, 0, 0],
      direction: "D",
    };

    const expected = {
      direction: "D",
      coordinates: [0, 0, 1],
    };

    expect(moveChandrayaan(initialConditions)).toStrictEqual(expected);
  });
});

describe("chandrayaan moves right in (x,y,x) directions", () => {
  test("move chandrayaan 1 unit right when direction is 'N", () => {
    const initialConditions = {
      commands: ["r"],
      coordinates: [0, 0, 0],
      direction: "N",
    };

    const expected = {
      direction: "E",
      coordinates: [0, 0, 0],
    };

    expect(moveChandrayaan(initialConditions)).toStrictEqual(expected);
  });

  test("move chandrayaan 1 unit right when direction is 'E", () => {
    const initialConditions = {
      commands: ["r"],
      coordinates: [0, 0, 0],
      direction: "E",
    };

    const expected = {
      direction: "S",
      coordinates: [0, 0, 0],
    };

    expect(moveChandrayaan(initialConditions)).toStrictEqual(expected);
  });

  test("move chandrayaan 1 unit right when direction is 'S", () => {
    const initialConditions = {
      commands: ["r"],
      coordinates: [0, 0, 0],
      direction: "S",
    };

    const expected = {
      direction: "W",
      coordinates: [0, 0, 0],
    };

    expect(moveChandrayaan(initialConditions)).toStrictEqual(expected);
  });

  test("move chandrayaan 1 unit right when direction is 'W", () => {
    const initialConditions = {
      commands: ["r"],
      coordinates: [0, 0, 0],
      direction: "W",
    };

    const expected = {
      direction: "N",
      coordinates: [0, 0, 0],
    };

    expect(moveChandrayaan(initialConditions)).toStrictEqual(expected);
  });

  test("move chandrayaan 1 unit right when direction is 'U", () => {
    const initialConditions = {
      commands: ["r"],
      coordinates: [0, 0, 0],
      direction: "U",
    };

    const expected = {
      direction: "S",
      coordinates: [0, 0, 0],
    };

    expect(moveChandrayaan(initialConditions)).toStrictEqual(expected);
  });

  test("move chandrayaan 1 unit right when direction is 'D", () => {
    const initialConditions = {
      commands: ["r"],
      coordinates: [0, 0, 0],
      direction: "D",
    };

    const expected = {
      direction: "N",
      coordinates: [0, 0, 0],
    };

    expect(moveChandrayaan(initialConditions)).toStrictEqual(expected);
  });
});

describe("chandrayaan moves left in (x,y,x) directions", () => {
  test("move chandrayaan 1 unit left when direction is 'N", () => {
    const initialConditions = {
      commands: ["l"],
      coordinates: [0, 0, 0],
      direction: "N",
    };

    const expected = {
      direction: "W",
      coordinates: [0, 0, 0],
    };

    expect(moveChandrayaan(initialConditions)).toStrictEqual(expected);
  });

  test("move chandrayaan 1 unit left when direction is 'E", () => {
    const initialConditions = {
      commands: ["l"],
      coordinates: [0, 0, 0],
      direction: "E",
    };

    const expected = {
      direction: "N",
      coordinates: [0, 0, 0],
    };

    expect(moveChandrayaan(initialConditions)).toStrictEqual(expected);
  });

  test("move chandrayaan 1 unit left when direction is 'S", () => {
    const initialConditions = {
      commands: ["l"],
      coordinates: [0, 0, 0],
      direction: "S",
    };

    const expected = {
      direction: "E",
      coordinates: [0, 0, 0],
    };

    expect(moveChandrayaan(initialConditions)).toStrictEqual(expected);
  });

  test("move chandrayaan 1 unit left when direction is 'W", () => {
    const initialConditions = {
      commands: ["l"],
      coordinates: [0, 0, 0],
      direction: "W",
    };

    const expected = {
      direction: "S",
      coordinates: [0, 0, 0],
    };

    expect(moveChandrayaan(initialConditions)).toStrictEqual(expected);
  });

  test("move chandrayaan 1 unit left when direction is 'U", () => {
    const initialConditions = {
      commands: ["l"],
      coordinates: [0, 0, 0],
      direction: "U",
    };

    const expected = {
      direction: "N",
      coordinates: [0, 0, 0],
    };

    expect(moveChandrayaan(initialConditions)).toStrictEqual(expected);
  });

  test("move chandrayaan 1 unit left when direction is 'D", () => {
    const initialConditions = {
      commands: ["l"],
      coordinates: [0, 0, 0],
      direction: "D",
    };

    const expected = {
      direction: "S",
      coordinates: [0, 0, 0],
    };

    expect(moveChandrayaan(initialConditions)).toStrictEqual(expected);
  });
});

describe(" turn chandrayaan upward from all directions ", () => {
  ["N", "S", "E", "W", "D"].forEach((direction) => {
    test(`turn up from ${direction}`, () => {
      const initialConditions = {
        commands: ["u"],
        coordinates: [0, 0, 0],
        direction: direction,
      };

      const expected = {
        direction: "U",
        coordinates: [0, 0, 0],
      };
      expect(moveChandrayaan(initialConditions)).toStrictEqual(expected);
    });
  });
});

describe(" turn chandrayaan downward from all directions ", () => {
  ["N", "S", "E", "W", "D"].forEach((direction) => {
    test(`turn downwards from ${direction}`, () => {
      const initialConditions = {
        commands: ["d"],
        coordinates: [0, 0, 0],
        direction: direction,
      };

      const expected = {
        direction: "D",
        coordinates: [0, 0, 0],
      };
      expect(moveChandrayaan(initialConditions)).toStrictEqual(expected);
    });
  });
});

describe(" turn chandrayaan with  of cmds Arr  ", () => {
  test("complex move ", () => {
    const initialConditions = {
      commands: ["f", "r", "u", "b", "l"],
      coordinates: [0, 0, 0],
      direction: "N",
    };

    const expected = {
      coordinates: [0, 1, -1],
      direction: "N",
    };
    expect(moveChandrayaan(initialConditions)).toStrictEqual(expected);
  });

  test("repeated command ", () => {
    const initialConditions = {
      commands: ["f", "f", "f", "f", "f"],
      coordinates: [0, 0, 0],
      direction: "E",
    };

    const expected = {
      coordinates: [5, 0, 0],
      direction: "E",
    };
    expect(moveChandrayaan(initialConditions)).toStrictEqual(expected);
  });

  test("complex movement  ", () => {
    const initialConditions = {
      commands: ["f", "r", "b", "b", "l"],
      coordinates: [0, 0, 0],
      direction: "N",
    };

    const expected = {
      coordinates: [-2, 1, 0],
      direction: "N",
    };
    expect(moveChandrayaan(initialConditions)).toStrictEqual(expected);
  });
});
