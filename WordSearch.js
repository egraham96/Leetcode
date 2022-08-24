

var exist = function(board, word) {
        
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[0].length;j++){
            if(dfs(board,i,j,word)) return true;
         }         
    }
   return false;
    
//     dfs function to check the each element, if exist then return true else return false 
//     and also backtrack the elements to check if the given word exist in the grid
 function dfs(board, i,j,count){
      if(count.length === 0) return true
      if( i == -1 || i >= board.length || j ==-1 || j >= board[0].length) return false
      if(board[i][j]!== count[0]) return false
      let temp = board[i][j]
      board[i][j]= "*"
       let res =  (dfs(board, i+1, j, count.substring(1))||
                               dfs(board, i-1, j, count.substring(1))||
                               dfs(board, i, j+1, count.substring(1))||
                               dfs(board, i, j-1, count.substring(1)));
        board[i][j] = temp
      return res
  }
}

