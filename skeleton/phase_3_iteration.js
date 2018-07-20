Array.prototype.bubbleSort = function() {
  let sorted = false;

while (!sorted) { 
  sorted = true;
  
  for (i=0; i < this.length; i++) {
    for (j=i+1; j <this.length; j++) {
        if (this[i] > this[j]) {
          if (j === this.length) {
            continue;
          }
          sorted = false;
          let i1 = this[i];
          let j1 = this[j];
          this[i] = j1;
          this[j] = i1;
        }
    }
  }
}
return this;
};

console.log([5,4,3,2,1].bubbleSort());

String.prototype.substrings = function() {
  let resArray = [];
  
  for (i=0; i < this.length; i++) {
    for (j=i+1; j <this.length+1; j++) {
          resArray.push(this.slice(i,j));   
                }
    }
  return resArray;
 
};
console.log("Apple".substrings());