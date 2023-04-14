function longestPalindromeSubseq(s) {
    let n = s.length;
    if (!n || n === 1) return n;
    //initialize dp[n][n] = {0}
    let dp = Array(n).fill(null).map(() => Array(n).fill(0));
        //base case
    for (let i = 0; i < n; i++) dp[i][i] = 1;
    //DP here
    for (let i = n - 2; i >= 0; i--)
        for (let j = i + 1; j < n; j++) {
        if (s[i] === s[j]) dp[i][j] = dp[i + 1][j - 1] + 2;
        //reduce the window
        else dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
        }
    return dp[0][n - 1];
};