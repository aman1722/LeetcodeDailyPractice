var kidsWithCandies = function(candies, extraCandies) {
    let ans = Array(candies.length).fill(false);
    let max = Math.max(...candies)
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= max) ans[i] = true;
    }
    return ans;
};