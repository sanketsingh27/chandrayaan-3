function moveChandrayaan({ commands, coordinates, direction }) {
  for (let command of commands) {
    if (command === "f") {
      coordinates = moveForward(coordinates, direction);
      continue;
    }
  }

  return { coordinates, direction };
}

const moveForward = (coordinates, direction) => {
  if ((direction = "N")) {
    coordinates[1] += 1;
    return coordinates;
  }
};

module.exports = { moveChandrayaan };
