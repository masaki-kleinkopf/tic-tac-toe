var gameGrid = document.querySelector('.game-board');

var game = new Game ('1','2')

gameGrid.addEventListener('click', placeTile)

function placeTile (event){
  game.takeTurn(parseInt(event.target.id))
  renderBoard(event);
};

function renderBoard(event){
  for (var i = 0; i < game.gameBoard.length; i++){
    if (game.gameBoard[i] === game.player1){
      console.log(event.target)
      event.target.innerHTML = `<p>X</p>`
    } else if (game.gameBoard[i] === game.player2){
      console.log(event.target)
      event.target.innerText = '0'
    }
  }
}
