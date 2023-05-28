var minCost = function(n, cuts) {
    cuts.push(0, n)
    cuts.sort((a, b) => a - b)

    const m = cuts.length
    const dp = Array(m).fill().map(() => Array(m).fill(0))

    for (let i = m - 2; ~i; --i){
        for (let j = i + 2; j < m; ++j){
            let min = Number.MAX_SAFE_INTEGER
            for (let k = i + 1; k < j; ++k){
                min = Math.min(min, cuts[j] - cuts[i] + dp[i][k] + dp[k][j])
            }
            dp[i][j] = min
        }
    }
    return dp[0][m - 1]
};