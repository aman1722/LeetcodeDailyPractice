var shortestBridge = function(grid) {
    const n = grid.length;
    const island = []; // first island mark 2.
    const direct = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    
    // find first island, mark 2.
    function dfs(r, c){
        if(r < 0 || c < 0 || r === n || c === n || grid[r][c] !== 1)
            return;
        grid[r][c] = 2;
        island.push([r, c]);
        for(const [dr, dc] of direct){
            dfs(r + dr, c + dc);
        }
    }
    
    function bfs(){
        let bridge = 0;
        while(island.length){
            const size = island.length;
            for(let i = 0; i < size; i++){
                const [pr, pc] = island.shift();
                for(const [dr, dc] of direct){
                    const [r, c] = [pr + dr, pc + dc];
                    if(r < 0 || c < 0 || r === n || c === n || grid[r][c] === 2)
                        continue;
                    if(grid[r][c] === 1) // find the 2nd island, return bridge.
                        return bridge;
                    grid[r][c] = 2; // if water is visited, also mark 2.
                    island.push([r, c]);
                }
            }
            bridge += 1;
        }
    }
    
    // just find the first island, and immediately do BFS.
    for(let r = 0; r < n; r++){
        for(let c = 0; c < n; c++){
            if(grid[r][c] === 1){
                dfs(r, c);
                return bfs();
            }
        }
    }
};