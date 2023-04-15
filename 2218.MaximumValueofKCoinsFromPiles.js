
var maxValueOfCoins = function(piles, k) {
    const memo = [];
    for (let i = 0; i < piles.length; i++) {
        memo.push(Array(k + 1).fill(-1));
    }

    const dp = (i, remain) => {
        if (i === piles.length || remain === 0) {
            return 0;
        }

        if (memo[i][remain] !== -1) {
            return memo[i][remain];
        }

        let ans = -Infinity;
        let localWallet = 0;
        const resultSkipPile = dp(i + 1, remain);

        for (let j = 0; j < Math.min(remain, piles[i].length); j++) {
            localWallet += piles[i][j];
            const resultTakeFromPile = localWallet + dp(i + 1, remain - j - 1);
            const bestLocalDecision = Math.max(resultSkipPile, resultTakeFromPile);
            ans = Math.max(ans, bestLocalDecision);
        }

        memo[i][remain] = ans;
        return memo[i][remain];
    };

    return dp(0, k);  
};