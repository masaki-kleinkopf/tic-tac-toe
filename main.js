var gameGrid = document.querySelector('.game-board');
var header = document.querySelector('h1')
var playerOneScore = document.querySelector('.player-one-score')
var playerTwoScore = document.querySelector('.player-two-score')
var currentPlayer = document.querySelector('.current-player')

var game = new Game ('Player 1','Player 2')
game.player1.token = './assets/146009.svg'
game.player2.token = './assets/circle-15.svg'

gameGrid.addEventListener('click', placeTile)

function placeTile (event){
  game.takeTurn(parseInt(event.target.id))
  showCurrentPlayer();
  renderBoard();
  checkWinOrDraw();
};

function showCurrentPlayer() {
  if (game.currentPlayer === game.player1){
    currentPlayer.innerText = `PLAYER 1's TURN`
  } else {
    currentPlayer.innerText = `PLAYER 2's TURN`
  }
}

function checkWinOrDraw() {
  if (game.winner) {
    displayWinner();
    displayWins();
    gameGrid.style.pointerEvents = 'none';
    setTimeout(resetForWin, 2000)
  };
  if (game.draw === true){
    header.innerText = `DRAW`
    gameGrid.style.pointerEvents = 'none';
    setTimeout(resetForWin, 2000);

  }
}
function displayWinner(){
  header.innerText = `${game.winner} wins`
};

function displayWins(){
  playerOneScore.innerText = `${game.player1.wins} wins`
  playerTwoScore.innerText = `${game.player2.wins} wins`
};

function resetForWin(){
  gameGrid.style.pointerEvents = '';
  game.resetGame();
  renderBoard();
  showCurrentPlayer();
};

function renderBoard(){
  for (var i = 0; i < game.gameBoard.length; i++){
    if (!game.gameBoard[i]){
      gameGrid.children[i].innerHTML = '';
    } else if (game.gameBoard[i] === game.player1){
      gameGrid.children[i].innerHTML = 'x'
    } else if (game.gameBoard[i] === game.player2){
      console.log(gameGrid.children[i])
      gameGrid.children[i].innerHTML = 'o'
    };
  };
};
