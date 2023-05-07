var longestObstacleCourseAtEachPosition = function(obstacles) {
    const idx = [], ans = [];

    obstacles.forEach(num => {
        let index = binarySearch(num, idx); 
        ans.push(index + 1); 
        idx[index] = num; 
    })
    
    return ans;
};

var binarySearch = function(n, arr) {
    let l = 0, r = arr.length;
    while (l < r){
        const mid = Math.floor((l + r) / 2);
        if (arr[mid] > n) r = mid;
        else l = mid + 1;
    }
    return l;
}