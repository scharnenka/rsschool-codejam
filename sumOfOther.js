function sumOfOther(array) {
  const arr = array;
  let sumOfIndex = 0;
  function getSum(v) {
    sumOfIndex += v;
  }
  arr.map(getSum);
  function getOtherSum(v) {
    return sumOfIndex - v;
  }
  return arr.map(getOtherSum);
}
