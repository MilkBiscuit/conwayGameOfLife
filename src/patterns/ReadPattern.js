import {
  getNumber,
  getState
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
  const regex = /\d*b|\d*o/g;
  const lastLine = pattern;
  const rows = lastLine.split('$');
  const patternRowNum = rows.length;
  const gridStrings = new Array(patternRowNum);

  // Decode the rle format
  for (let i = 0; i < patternRowNum; i++) {
    const row = rows[i];
    const array = row.match(regex);
    for (let j = 0; j < array.length; j++) {
      const unit = array[j];
      const num = getNumber(unit);
      const state = getState(unit);
      let decoded = '';
      for (let k = 0; k < num; k++) {
        decoded += state;
      }

      array[j] = decoded;
    }
    gridStrings[i] = array.join('');
  }

  initGrid();

  // Update whole grid array value
  const rowOffset = Math.floor((20 - patternRowNum) / 2);
  const colOffset = Math.floor((40 - y) / 2);
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
