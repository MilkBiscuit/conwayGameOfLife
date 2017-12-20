import {
  getNumber,
  getState
} from '../utils';

const rowNum = 20;
const colNum = 40;
const wholeGrid = new Array(rowNum);

for (let i = 0; i < rowNum; i++) {
  wholeGrid[i] = new Array(colNum);
  wholeGrid[i].fill(0);
}

export const ReadPattern = (pattern) => {
  const regex = /\d*b|\d*o/g;
  // const lastLine = '3bo3b$b3o3b$o5bo$ob5o$bo5b$4bo2b$3b2o!';
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

  // Update whole grid array value
  let i = 0;
  for (const gridString of gridStrings) {
    const len = gridString.length;
    for (let j = 0; j < len; j++) {
      if (gridString[j] === 'o') {
        wholeGrid[i][j] = 1;
      }
    }
    i++;
  }

  return wholeGrid;
};
