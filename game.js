class Game {
  constructor(player1, player2){
    this.playerX = new Player (player1);
    this.playerO = new Player (player2);
    this.gameBoard = ['','','','','x','x','','','']
    this.turn = this.playerX.id;
    this.trueFalse = 0;
    }
  checkForWin(player){
    var winConditions = [[player,player,player,'','','','','',''],['','','',player,player,player,'','',''], ['','','','','','',player,player,player],
    [player,'','',player,'','',player,'',''],['',player,'','',player,'','',player,''],
    ['','',player,'','',player,'','',player],[player,'','','',player,'','','',player],
    ['','',player,'',player,'',player,'',''],['','','','','','','','','']]
    loop1:
    for (var i = 0; i < winConditions.length; i++) {
      loop2:
      for (var j = 0; j < winConditions[i].length; j++){
        if (winConditions[i][j]!== this.gameBoard[j]) {
          this.trueFalse++
          break loop2
      }
    }
  }
   if (this.trueFalse !== 8 ){
     return `WIN`
   }


  }
  

  checkForDraw(){

  }
  resetGame(){
    this.gameBoard = ['','','','','','','','','']
  }
}
