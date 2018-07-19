Array.prototype.uniq = function() {
  let resultArray = [];
  this.forEach( (el) => {
    // debugger
    if (!resultArray.includes(el)) { 
    resultArray.push(el);
    }
  });
  return resultArray;
};

// console.log([1,1,1,2,2,3].uniq());

Array.prototype.twoSum = function() {
  const pairs = [];
  for (i = 0; i < this.length; i++) {
    for (j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        pairs.push([i, j]);
      }
    }
  }
  return pairs;
};

// console.log([1, 2, 0, 0, -1].twoSum());

Array.prototype.transpose = function() {
  const transposed = new Array(this.length);
  for (i=0; i<this.length; i++) {
    transposed[i] = new Array(this.length);
  }
  for (i=0; i< this.length; i++) {
    for (j=0; j < this.length; j++) {
      transposed[j][i] = this[i][j];
    }
  }
  return transposed;
};