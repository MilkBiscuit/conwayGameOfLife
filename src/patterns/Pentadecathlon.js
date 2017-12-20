const MAX_COL = 40;
const MAX_ROW = 20;
const twoDimensionArray = new Array(MAX_ROW);
for (let i = 0; i < MAX_ROW; i++) {
  twoDimensionArray[i] = new Array(MAX_COL);
  twoDimensionArray[i].fill(0);
}

for (let j = 6; j < 14; j++) {
  twoDimensionArray[3][j] = 1;
  twoDimensionArray[5][j] = 1;
}

twoDimensionArray[4][6] = 1;
twoDimensionArray[4][8] = 1;
twoDimensionArray[4][9] = 1;
twoDimensionArray[4][10] = 1;
twoDimensionArray[4][11] = 1;
twoDimensionArray[4][13] = 1;

const Pentadecathlon = twoDimensionArray;

export { Pentadecathlon };
