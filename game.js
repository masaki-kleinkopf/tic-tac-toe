class Game {
  constructor(player1, player2){
    this.player1 = new Player (player1,'o');
    this.player2 = new Player (player2,'x');
    this.gameBoard = ['','','','','','','','',''];
    this.currentPlayer = this.player1;
    this.turnsTaken = 0;
    this.winner = '';
    this.draw = false;
  };

  checkForWin(player){
    var winConditions = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    for (var i = 0; i < winConditions.length; i++) {
      if (this.gameBoard[winConditions[i][0]] === player && this.gameBoard[winConditions[i][1]] === player && this.gameBoard[winConditions[i][2]] === player) {
        this.updateForWin(player)
      };
    };
  };

  updateForWin(player) {
      player.increaseWins();
      this.winner = player;
    };

  takeTurn(gridNumber) {
    if (!this.gameBoard[gridNumber]){
      this.gameBoard.splice(gridNumber,1,this.currentPlayer);
      this.turnsTaken++;
      this.changeTurn();
      this.checkForWin(this.player1);
      this.checkForWin(this.player2);
      this.checkForDraw();
    };
  };

  changeTurn() {
    if (this.currentPlayer === this.player1){
      this.currentPlayer = this.player2
    } else {
      this.currentPlayer = this.player1
    };
  };

  checkForDraw() {
    if (this.turnsTaken === 9 && !this.winner){
      this.draw = true;
    };
  };

  resetGame() {
    this.gameBoard = ['','','','','','','','',''];
    this.turnsTaken = 0;
    this.winner = '';
    this.draw = false;
  };
};
