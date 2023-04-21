var profitableSchemes = function(n, minProfit, group, profit) {
    let arr = new Array(n + 1).fill(0);
  arr = arr.map(() => new Array(minProfit + 1).fill(0));
  const mod = 10 ** 9 + 7
  arr.forEach(c => c[0] = 1);
  group.forEach((item, key) => { 
      for (let i = n; i >= item; i--) {
          for (let j = minProfit; j >= 0; j--) {
              arr[i][j] = (arr[i][j] + arr[i - item][Math.max(0, j - profit[key])]) % (mod)
          }
      }
  })
  return arr[n][minProfit];
};