function sumOfOther (array) {
    const arr=array;
    let sumOfIndex=0;
    function getSum(v,i,a) {
        sumOfIndex+=v;
    }
    arr.map(getSum);
    function getOtherSum(v,i,a) {
        return sumOfIndex-v;
    }
    return arr.map(getOtherSum);
}
