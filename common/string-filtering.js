const mixedArray = [3,13,74,14,66,15,22,4.7,3,11,6];
const isEven = num => { 
      if (num % 2 == 0) return 'true';
};
const filterArray = (ar, fn) => {
  let ar2 = [];
  for (let i=0;i<ar.length;i++) {
    if (fn(ar[i])) ar2.push(ar[i]);
  }
  return ar2;
};

console.log(filterArray(mixedArray, isEven));