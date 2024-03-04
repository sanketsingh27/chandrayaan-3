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
  if (direction === "N") {
    coordinates[1] += 1;
    return coordinates;
  } else if (direction === "E") {
    coordinates[0] += 1;
    return coordinates;
  } else if (direction === "S") {
    coordinates[1] -= 1;
    return coordinates;
  } else if (direction === "W") {
    coordinates[0] -= 1;
    return coordinates;
  } else if (direction === "U") {
    coordinates[2] += 1;
    return coordinates;
  } else if (direction === "D") {
    coordinates[2] -= 1;
    return coordinates;
  } else {
    return "enter valid direction and coordinates ";
  }
};

module.exports = { moveChandrayaan };
