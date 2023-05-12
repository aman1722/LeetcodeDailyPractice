var mostPoints = function(questions) {
    let size = questions.length;
  let dp = new Array(size).fill(-1);
  const helper = (questions, size, idx, dp) => {
      if (idx >= size) return 0;
      if (dp[idx] !== -1) return dp[idx];
      let choose = Math.max(questions[idx][0] + helper(questions, size, idx + questions[idx][1] + 1, dp), helper(questions, size, idx + 1, dp));
      return dp[idx] = choose;
  }
  return helper(questions, size, 0, dp);
};