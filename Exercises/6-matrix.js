"use strict";

const max = (matrix) => {
let maxIHateTests = matrix[0][0];
for (let i = 0; i<matrix.length; i++) {
  for (let j = 0; j<matrix[0].length; j++){
  if (matrix[i][j] > maxIHateTests) {    
      maxIHateTests = matrix[i][j];
    }
  }
}
return maxIHateTests;
};

module.exports = { max };
