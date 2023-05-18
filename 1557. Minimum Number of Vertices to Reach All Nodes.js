var findSmallestSetOfVertices = function(n, edges) {
    let map = new Array(n);
    let ans = [];
    
    for (let [index,value] of edges) {
        map[value] = 1;
    };
    
    for (let i = 0; i < n; i++) {
        if (!map[i]) ans.push(i);
    };
    
    return ans;
};