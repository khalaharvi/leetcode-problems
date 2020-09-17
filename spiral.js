/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  if(n === 0) { return [] };
  // fill array
  let matrix = new Array(n);
  let count = 0;
  for(let i = 0; i < n; i++){
      matrix[i] = new Array(n).fill(0);
  }
  let L = matrix.length;
  let H = L && matrix[0].length;
  
  for(let i=0; i < L; i++){
      for(let j = 0; j < H; j++){
          if(matrix[i][j] === 0){
              count++;
              dfs(i,j,count);    
          }
          
      }
  }
  
  function dfs(i,j,count){
      if( i < 0 || j < 0 || i > L || j > H) { return;}

      matrix[i][j] = count;
      count++;
      if(j+1 < H && matrix[i][j+1] === 0){ dfs(i,j+1, count); }
      if(i+1 < L && matrix[i+1][j] === 0){ dfs(i+1,j, count); }
      if(j-1 < H && j-1 >= 0 && matrix[i][j-1] === 0){ dfs(i,j-1, count); }
      if(i-1 < L && i-1 >= 0 && matrix[i-1][j] === 0){ dfs(i-1,j, count); }
      
      return;
      
      
  }
  
  return matrix;
  
};

// n=4 doesnt work
// Expected [[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]
// Output [[1,2,3,4],[16,15,14,5],[11,12,13,6],[10,9,8,7]]