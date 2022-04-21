class Game {
  constructor(player1, player2){
    this.playerX = new Player (player1);
    this.playerO = new Player (player2);
    this.gameBoard = ['','','','','','','','',''];
    this.currentPlayer = this.playerX.id;
    this.turnsTaken = 0;
    this.winner = ''
    }
  checkForWin(player){
    var trueFalse;
    var winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    loop1:
    for (var i = 0; i < winConditions.length; i++) {
      trueFalse = true;
      loop2:
      for (var j = 0; j < winConditions[i].length; j++){
        if (this.gameBoard[winConditions[i][j]] !== player.id){
          trueFalse = false;
          break loop2;
        }
      }
      if (trueFalse){
        this.updateForWin(player)
        return `win`
      }
    }
  }
  updateForWin(player){
      player.increaseWins();
      this.winner = player.id;
      this.resetGame();
    }

  takeTurn(gridNumber){
    if (!this.gameBoard[gridNumber]){
      this.gameBoard.splice(gridNumber,1,this.currentPlayer);
    }
    this.changeTurn();
    this.turnsTaken++;
    this.checkForWin(this.playerX);
    this.checkForWin(this.playerO);
    this.checkForDraw();
  }

  changeTurn(){
    if (this.currentPlayer === this.playerX.id){
      this.currentPlayer = this.playerO.id
    } else {
      this.currentPlayer = this.playerX.id
    }
  }


  checkForDraw(){
    if (this.turnsTaken === 9 && !this.winner){
      return `draw`
    }
  }

  //test in console
  // for (var i = 0; i <gameBoard.length;i++){
  //   this.turnsTaken++
  // }
  resetGame(){
    this.gameBoard = ['','','','','','','','','']
  }
}
