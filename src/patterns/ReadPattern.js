import {
  containsEmptyRowAtEnd,
  getLastCharacter,
  getNumber,
  getState,
  removeLastCharacter
} from '../utils';

const rowNum = 20;
const colNum = 40;
const wholeGrid = new Array(rowNum);

function initGrid() {
  for (let i = 0; i < rowNum; i++) {
    wholeGrid[i] = new Array(colNum);
    wholeGrid[i].fill(0);
  }  
}

export const ReadPattern = (pattern, x, y) => {
  // There might be '6o2$' which contains an empty row
  // Only consider 1-9 empty rows here
  // const regex = /\d*b|\d*o/g;
  const regex = /\d*b\d\b|\d*o\d\b|\d*b|\d*o/g;
  const lastLine = pattern;
  const rows = lastLine.split('$');
  const patternRowNum = rows.length;
  const gridStrings = new Array(parseInt(y, 10));

  // Decode the rle format
  let gridStringIndex = 0;
  for (let i = 0; i < patternRowNum; i++, gridStringIndex++) {
    let emptyLinesNum = 0;
    const row = rows[i];
    const array = row.match(regex);
    for (let j = 0; j < array.length; j++) {
      let unit = array[j];
      if (containsEmptyRowAtEnd(unit)) {
        emptyLinesNum = parseInt(getLastCharacter(unit), 10);
        unit = removeLastCharacter(unit);
      }

      const num = getNumber(unit);
      const state = getState(unit);
      let decoded = '';
      for (let k = 0; k < num; k++) {
        decoded += state;
      }

      array[j] = decoded;
    }
    gridStrings[gridStringIndex] = array.join('');

    while (emptyLinesNum >= 2) {
      gridStrings[++gridStringIndex] = '';
      emptyLinesNum--;
    }
  }

  initGrid();

  // Update whole grid array value
  const rowOffset = Math.floor((20 - y) / 2);
  const colOffset = Math.floor((40 - x) / 2);
  let i = rowOffset;
  for (const gridString of gridStrings) {
    const len = gridString.length;
    for (let j = 0; j < len; j++) {
      if (gridString[j] === 'o') {
        wholeGrid[i][j + colOffset] = 1;
      }
    }
    i++;
  }

  return wholeGrid;
};
