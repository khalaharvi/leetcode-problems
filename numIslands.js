/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const H = grid.length;
  const W = H && grid[0].length;
  if( grid === null || grid.length === 0) { return 0}
  let count = 0;
  for(let i =0; i < grid.length; i++){
      for(let j = 0; j < grid[i].length; j++){
          if(grid[i][j] === '0') continue;
          count++;
          dfs(i,j);
      }
  }
  
  function dfs(i,j){
      if(i < 0 || j < 0 || i === H || j === W){
          return;
      }
      if(grid[i][j] === '0') return;
      grid[i][j] = '0';
      dfs(i-1,j);
      dfs(i+1,j);
      dfs(i,j-1);
      dfs(i,j+1);
  }
  
  return count;
};

console.log(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]));