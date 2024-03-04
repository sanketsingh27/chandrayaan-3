function moveChandrayaan({ commands, coordinates, direction }) {
  for (let command of commands) {
    if (command === "f") {
      coordinates = moveForward(coordinates, direction);
      continue;
    }
    if (command === "b") {
      coordinates = moveBackward(coordinates, direction);
      continue;
    }
    if (command === "r") {
      direction = turnRight(direction);
      continue;
    }
    if (command === "l") {
      direction = turnLeft(direction);
      continue;
    }
    if (command === "u") {
      direction = "U";
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

const moveBackward = (coordinates, direction) => {
  if (direction === "N") {
    coordinates[1] -= 1;
    return coordinates;
  } else if (direction === "E") {
    coordinates[0] -= 1;
    return coordinates;
  } else if (direction === "S") {
    coordinates[1] += 1;
    return coordinates;
  } else if (direction === "W") {
    coordinates[0] += 1;
    return coordinates;
  } else if (direction === "U") {
    coordinates[2] -= 1;
    return coordinates;
  } else if (direction === "D") {
    coordinates[2] += 1;
    return coordinates;
  } else {
    return "enter valid direction and coordinates ";
  }
};

const turnRight = (direction) => {
  if (direction === "N") {
    return "E";
  } else if (direction === "S") {
    return "W";
  } else if (direction === "E") {
    return "S";
  } else if (direction === "W") {
    return "N";
  } else if (direction === "U") {
    return "S";
  } else if (direction === "D") {
    return "N";
  }
};

const turnLeft = (direction) => {
  if (direction === "N") {
    return "W";
  } else if (direction === "S") {
    return "E";
  } else if (direction === "E") {
    return "N";
  } else if (direction === "W") {
    return "S";
  } else if (direction === "U") {
    return "N";
  } else if (direction === "D") {
    return "S";
  }
};

module.exports = { moveChandrayaan };
