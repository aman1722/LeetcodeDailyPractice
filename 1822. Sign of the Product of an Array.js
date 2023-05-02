var arraySign = function(nums) {
    let isNeg = false;
    for(let num of nums) {
        if(num === 0) return 0;
        if(num < 0) isNeg = !isNeg;
    }
    return isNeg?-1:1; 
};