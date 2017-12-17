export const EDGE = {
  FIRST_ROW: 0,
  LAST_ROW: 1,
  FIRST_COL: 2,
  LAST_COL: 3,
  TOP_LEFT_CORNER: 4,
  TOP_RIGHT_CORNER: 5,
  BOTTOM_LEFT_CORNER: 6,
  BOTTOM_RIGHT_CORNER: 7,
  NOT_EDGE: 8
};
Object.freeze(EDGE);

const neighbourAbove = (rowId, colId, twoDimensionArray) => {
  return twoDimensionArray[rowId - 1][colId];
};

const neighbourBelow = (rowId, colId, twoDimensionArray) => {
  return twoDimensionArray[rowId + 1][colId];
};

const neighbourLeft = (rowId, colId, twoDimensionArray) => {
  return twoDimensionArray[rowId][colId - 1];
};

const neighbourRight = (rowId, colId, twoDimensionArray) => {
  return twoDimensionArray[rowId][colId + 1];
};

const neighbourAboveLeft = (rowId, colId, twoDimensionArray) => {
  return twoDimensionArray[rowId - 1][colId - 1];
};

const neighbourAboveRight = (rowId, colId, twoDimensionArray) => {
  return twoDimensionArray[rowId - 1][colId + 1];
};

const neighbourBelowLeft = (rowId, colId, twoDimensionArray) => {
  return twoDimensionArray[rowId + 1][colId - 1];
};

const neighbourBelowRight = (rowId, colId, twoDimensionArray) => {
  return twoDimensionArray[rowId + 1][colId + 1];
};

const topLeftCornerNeighbours = (rowId, colId, twoDimensionArray) => [
  neighbourRight(rowId, colId, twoDimensionArray),
  neighbourBelow(rowId, colId, twoDimensionArray),
  neighbourBelowRight(rowId, colId, twoDimensionArray),
];

const topRightCornerNeighbours = (rowId, colId, twoDimensionArray) => [
  neighbourLeft(rowId, colId, twoDimensionArray),
  neighbourBelow(rowId, colId, twoDimensionArray),
  neighbourBelowLeft(rowId, colId, twoDimensionArray),
];

const bottomLeftCornerNeighbours = (rowId, colId, twoDimensionArray) => [
  neighbourRight(rowId, colId, twoDimensionArray),
  neighbourAbove(rowId, colId, twoDimensionArray),
  neighbourAboveRight(rowId, colId, twoDimensionArray),
];

const bottomRightCornerNeighbours = (rowId, colId, twoDimensionArray) => [
  neighbourLeft(rowId, colId, twoDimensionArray),
  neighbourAbove(rowId, colId, twoDimensionArray),
  neighbourAboveLeft(rowId, colId, twoDimensionArray),
];

const firstRowNeighbours = (rowId, colId, twoDimensionArray) => [
  neighbourLeft(rowId, colId, twoDimensionArray),
  neighbourBelowLeft(rowId, colId, twoDimensionArray),
  neighbourBelow(rowId, colId, twoDimensionArray),
  neighbourBelowRight(rowId, colId, twoDimensionArray),
  neighbourRight(rowId, colId, twoDimensionArray),
];

const lastRowNeighbours = (rowId, colId, twoDimensionArray) => [
  neighbourLeft(rowId, colId, twoDimensionArray),
  neighbourAboveLeft(rowId, colId, twoDimensionArray),
  neighbourAbove(rowId, colId, twoDimensionArray),
  neighbourAboveRight(rowId, colId, twoDimensionArray),
  neighbourRight(rowId, colId, twoDimensionArray),
];

const firstColNeighbours = (rowId, colId, twoDimensionArray) => [
  neighbourAbove(rowId, colId, twoDimensionArray),
  neighbourAboveRight(rowId, colId, twoDimensionArray),
  neighbourRight(rowId, colId, twoDimensionArray),
  neighbourBelowRight(rowId, colId, twoDimensionArray),
  neighbourBelow(rowId, colId, twoDimensionArray),
];

const lastColNeighbours = (rowId, colId, twoDimensionArray) => [
  neighbourBelow(rowId, colId, twoDimensionArray),
  neighbourBelowLeft(rowId, colId, twoDimensionArray),
  neighbourLeft(rowId, colId, twoDimensionArray),
  neighbourAboveLeft(rowId, colId, twoDimensionArray),
  neighbourAbove(rowId, colId, twoDimensionArray),
];

const noEdgeNeighbours = (rowId, colId, twoDimensionArray) => [
  neighbourBelow(rowId, colId, twoDimensionArray),
  neighbourBelowLeft(rowId, colId, twoDimensionArray),
  neighbourLeft(rowId, colId, twoDimensionArray),
  neighbourAboveLeft(rowId, colId, twoDimensionArray),
  neighbourAbove(rowId, colId, twoDimensionArray),
  neighbourAboveRight(rowId, colId, twoDimensionArray),
  neighbourRight(rowId, colId, twoDimensionArray),
  neighbourBelowRight(rowId, colId, twoDimensionArray),
];

export const getAliveNeighbourNum = (rowId, colId, twoDimensionArray) => {
  const edge = isOnEdge(rowId, colId, twoDimensionArray);
  let aliveNeighbourNum = 0;

  switch (edge) {
    case EDGE.TOP_LEFT_CORNER:
      for (const neighbour of topLeftCornerNeighbours(rowId, colId, twoDimensionArray)) {
        if (neighbour) aliveNeighbourNum++;
      }
      break;
    case EDGE.TOP_RIGHT_CORNER:
      for (const neighbour of topRightCornerNeighbours(rowId, colId, twoDimensionArray)) {
        if (neighbour) aliveNeighbourNum++;
      }
      break;
    case EDGE.BOTTOM_LEFT_CORNER:
      for (const neighbour of bottomLeftCornerNeighbours(rowId, colId, twoDimensionArray)) {
        if (neighbour) aliveNeighbourNum++;
      }
      break;
    case EDGE.BOTTOM_RIGHT_CORNER:
      for (const neighbour of bottomRightCornerNeighbours(rowId, colId, twoDimensionArray)) {
        if (neighbour) aliveNeighbourNum++;
      }
      break;
    case EDGE.FIRST_ROW:
      for (const neighbour of firstRowNeighbours(rowId, colId, twoDimensionArray)) {
        if (neighbour) aliveNeighbourNum++;
      }
      break;
    case EDGE.LAST_ROW:
      for (const neighbour of lastRowNeighbours(rowId, colId, twoDimensionArray)) {
        if (neighbour) aliveNeighbourNum++;
      }
      break;
    case EDGE.FIRST_COL:
      for (const neighbour of firstColNeighbours(rowId, colId, twoDimensionArray)) {
        if (neighbour) aliveNeighbourNum++;
      }
      break;
    case EDGE.LAST_COL:
      for (const neighbour of lastColNeighbours(rowId, colId, twoDimensionArray)) {
        if (neighbour) aliveNeighbourNum++;
      }
      break;
    case EDGE.NOT_EDGE:
    default:
      for (const neighbour of noEdgeNeighbours(rowId, colId, twoDimensionArray)) {
        if (neighbour) aliveNeighbourNum++;
      }
      break;
  }

  return aliveNeighbourNum;
};

export const isOnEdge = (rowId, colId, twoDimensionArray) => {
  const rowLen = twoDimensionArray.length;
  const colLen = twoDimensionArray[0].length;
  if (rowId === 0) {
    if (colId === 0) {
      return EDGE.TOP_LEFT_CORNER;
    } else if (colId === colLen - 1) {
      return EDGE.TOP_RIGHT_CORNER;
    }

    return EDGE.FIRST_ROW;
  } else if (rowId === rowLen - 1) {
    if (colId === 0) {
      return EDGE.BOTTOM_LEFT_CORNER;
    } else if (colId === colLen - 1) {
      return EDGE.BOTTOM_RIGHT_CORNER;
    }

    return EDGE.LAST_ROW;
  }

  if (colId === 0) {
    return EDGE.FIRST_COL;
  } else if (colId === colLen - 1) {
    return EDGE.LAST_COL;
  }

  return EDGE.NOT_EDGE;
};
