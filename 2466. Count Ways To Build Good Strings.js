var countGoodStrings = function(low, high, zero, one) {
    const modulo = 1e9 + 7
    let ans = 0
    const dp = Array(high + 1).fill(0)
    dp[0] = 1

    for (let i = 1; i <= high; i++) {
     

        if (i - zero >= 0) {
            dp[i] = (dp[i] + dp[i - zero]) % modulo
        }
        if (i - one >= 0) {
            dp[i] = (dp[i] + dp[i - one]) % modulo
        }    
        if (i >= low) {
            ans = (ans + dp[i]) % modulo
        }  
    }

    return ans
};