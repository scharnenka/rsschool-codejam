function make(...args) {
  const currentSum = args;
  function f() {
    for (let i = 0; i < arguments.length; i++) {
      const n = arguments[i];
      if (typeof (n) === 'function') {
        return currentSum.reduce(n);
      }
      currentSum.push(n);
    }
    return f;
  }
  return f;
}
