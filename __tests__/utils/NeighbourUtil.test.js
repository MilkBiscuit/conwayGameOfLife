import {
  EDGE,
  getAliveNeighbourNum,
  isOnEdge
} from '../../src/utils';

const grid3x4 = new Array(3);

for (let i = 0; i < 3; i++) {
  grid3x4[i] = new Array(4);
  grid3x4[i].fill(0);
}

grid3x4[1][1] = 1;
grid3x4[1][2] = 1;

/**
  * The grid looks like
  0 0 0 0
  0 1 1 0
  0 0 0 0
**/

test('is on edge', () => {
  expect(isOnEdge(0, 0, grid3x4)).toBe(EDGE.TOP_LEFT_CORNER);
  expect(isOnEdge(0, 3, grid3x4)).toBe(EDGE.TOP_RIGHT_CORNER);
  expect(isOnEdge(2, 3, grid3x4)).toBe(EDGE.BOTTOM_RIGHT_CORNER);
  expect(isOnEdge(2, 0, grid3x4)).toBe(EDGE.BOTTOM_LEFT_CORNER);

  expect(isOnEdge(0, 1, grid3x4)).toBe(EDGE.FIRST_ROW);
  expect(isOnEdge(2, 1, grid3x4)).toBe(EDGE.LAST_ROW);
  expect(isOnEdge(1, 0, grid3x4)).toBe(EDGE.FIRST_COL);
  expect(isOnEdge(1, 3, grid3x4)).toBe(EDGE.LAST_COL);

  expect(isOnEdge(1, 1, grid3x4)).toBe(EDGE.NOT_EDGE);
});

test('calculate neighbour num', () => {
  expect(getAliveNeighbourNum(0, 0, grid3x4)).toBe(1);
  expect(getAliveNeighbourNum(0, 3, grid3x4)).toBe(1);
  expect(getAliveNeighbourNum(2, 3, grid3x4)).toBe(1);
  expect(getAliveNeighbourNum(2, 0, grid3x4)).toBe(1);

  expect(getAliveNeighbourNum(0, 1, grid3x4)).toBe(2);
  expect(getAliveNeighbourNum(2, 1, grid3x4)).toBe(2);
  expect(getAliveNeighbourNum(1, 0, grid3x4)).toBe(1);
  expect(getAliveNeighbourNum(1, 3, grid3x4)).toBe(1);

  expect(getAliveNeighbourNum(1, 1, grid3x4)).toBe(1);
  expect(getAliveNeighbourNum(1, 2, grid3x4)).toBe(1);
});
