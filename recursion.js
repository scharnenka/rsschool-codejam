function recursion(array) {
  const input = array;     
  const ar = [];
  function r(arr, level) {  
    if (typeof (arr.left) !== 'undefined') {
      r(arr.left, level + 1);
    }
    if (typeof (arr.right) !== 'undefined') {
      r(arr.right, level + 1);
    }             
    if (typeof (ar[level]) === 'undefined') {
      ar[level] = [arr.value];
    } else {
      const tmp = ar[level];
      tmp.push(arr.value);
      ar[level] = tmp; 
    }         
  }
  r(input, 0);
  return ar;
}
