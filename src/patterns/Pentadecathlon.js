const twoDimensionArray = new Array(10);
for (let i = 0; i < 10; i++) {
  twoDimensionArray[i] = new Array(20);
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
