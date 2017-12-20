export const getNumber = (rleUnit) => {
  let number;
  if (rleUnit) {
    const len = rleUnit.length;
    const numberStr = rleUnit.substring(0, len - 1);
    number = parseInt(numberStr, 10);
  }

  if (number) {
    return number;
  }

  return 1;
};

export const getState = (rleUnit) => {
  if (rleUnit) {
    const len = rleUnit.length;
    return rleUnit.substring(len - 1, len);
  }

  return '';
};
