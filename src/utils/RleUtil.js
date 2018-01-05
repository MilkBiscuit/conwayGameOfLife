import {
  removeLastCharacter,
  getLastCharacter
} from './StringUtil';

export const getNumber = (rleUnit) => {
  const numberStr = removeLastCharacter(rleUnit);
  const number = parseInt(numberStr, 10);

  if (number) {
    return number;
  }

  return 1;
};

export const getState = (rleUnit) => {
  return getLastCharacter(rleUnit);
};

export function containsEmptyRowAtEnd(rleUnit) {
  const regex = /\d*b\d\b|\d*o\d\b/g;

  return regex.test(rleUnit);
}
