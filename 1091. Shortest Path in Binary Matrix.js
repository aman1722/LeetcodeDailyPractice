const shortestPathBinaryMatrix = (grid) => {
    // This is just BFS in 8 directions at its core
    let q = [[0, 0]]; // We start at the very beginning of the matrix
    
    let steps = 1; // We keep track of steps taken
    while(q.length) {
        const len = q.length; // needed for inner for loop to process all before moving to next step
        for(let i = 0; i < len; i++) {
            [r, c] = q.shift(); // get the row and col position from the q
            
            // Condition for skipping bfs processing
            if(
                r < 0 ||
                c < 0 ||
                r > grid.length - 1 ||
                c > grid[0].length - 1 ||
                grid[r][c] === 1 // 1 is a wall and will be past visited vertexes
            ) continue;
            
            
            if(r === grid.length - 1 && c === grid[0].length - 1 && grid[r][c] === 0) return steps; // Check if we hit the exit
            
            grid[r][c] = 1; // Mark this as visited
            
            // Now we need to queue up the 8 other directions
            // Might be nice to move this to another function or something
            // First cardinal directions
            q.push([r + 1, c]);
            q.push([r - 1, c]);
            q.push([r, c + 1]);
            q.push([r, c - 1]);
            // Diagonal
            q.push([r + 1, c + 1]);
            q.push([r - 1, c + 1]);
            q.push([r - 1, c - 1]);
            q.push([r + 1, c - 1]);
        }
        
        steps++;
    }
    
    // If we make it all the way here, we didnt find a path
    return -1;
};