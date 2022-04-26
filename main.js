var currentPlayer = document.querySelector('.current-player');
var gameGrid = document.querySelector('.game-board');
var header = document.querySelector('h1');
var playerOneScore = document.querySelector('.player-one-score');
var playerTwoScore = document.querySelector('.player-two-score');

var game = new Game ('Player 1','Player 2');
game.player1.token = `<img class='token' src='./assets/146009.svg' alt='o token'>`;
game.player2.token = `<img class='token' src='./assets/x-symbol-svgrepo-com.svg' alt='x token'>`;

gameGrid.addEventListener('click', placeToken);

function placeToken (event){
  if (event.target.id) {
    game.takeTurn(parseInt(event.target.id))
  };
  renderBoard();
  showCurrentPlayer();
  checkWinOrDraw();
};

function showCurrentPlayer() {
  if (game.currentPlayer === game.player1) {
    currentPlayer.innerHTML = `<div class='mini-token-container'>${game.player1.token}</div> TURN`
  } else {
    currentPlayer.innerHTML = `<div class='mini-token-container'>${game.player2.token}</div> TURN`
  };
};

function checkWinOrDraw() {
  checkWin();
  checkDraw();
};

function checkWin() {
  if (game.winner) {
    displayWinner();
    displayWins();
    gameGrid.style.pointerEvents = 'none';
    setTimeout(resetBoard, 2000);
  };
};

function checkDraw() {
  if (game.draw === true){
    header.innerText = `DRAW`
    gameGrid.style.pointerEvents = 'none';
    setTimeout(resetBoard, 2000);
  };
};

function displayWinner() {
  header.innerHTML= `<div class='winner-token-container'>${game.winner.token}</div> wins`;
};

function displayWins() {
  playerOneScore.innerHTML = `${game.player1.wins} wins`;
  playerTwoScore.innerHTML = `${game.player2.wins} wins`;
};

function resetBoard() {
  gameGrid.style.pointerEvents = '';
  game.resetGame();
  renderBoard();
  header.innerText = 'tic-tac-toe';
  showCurrentPlayer();
};

function renderBoard() {
  for (var i = 0; i < game.gameBoard.length; i++) {
    if (!game.gameBoard[i]) {
      gameGrid.children[i].innerHTML = '';
    } else if (game.gameBoard[i] === game.player1) {
      gameGrid.children[i].innerHTML = game.player1.token;
    } else if (game.gameBoard[i] === game.player2) {
      gameGrid.children[i].innerHTML = game.player2.token;
    };
  };
};
