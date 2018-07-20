Array.prototype.myEach = function(cb) { 
  for (i=0; i<this.length; i++){
    cb(this[i]);
  }
};

Array.prototype.myMap = function(cb) {
  let arr = []; 
  // debugger
  this.myEach(function(element) {
    arr.push(cb(element));
  });
  return arr;
};

Array.prototype.myReduce = function(cb, initialValue) {
  let acc;
  if (!initialValue) {
    acc = this[0];
    this.shift();
  }
  else {
    acc = initialValue;
  }
  
  this.myEach((element) => acc = cb(acc, element));
  return acc;
};

function callback(num) {
  return num * 2;
}


// console.log([2, 4, 5].myMap(callback));

console.log([1, 2, 3].myReduce(function(acc, el) {
  return acc + el;
}));