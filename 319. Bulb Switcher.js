var bulbSwitch = function(n) {
    if (n === 0) return n;
    let result = 1;
    let oddIncrement = 3;
    for (let i = 3; i < n; ) {
      oddIncrement += 2;
      i += oddIncrement;
      result++;
    }
    return result;
};