var gameGrid = document.querySelector('.game-board');

var game = new Game ('1','2')
game.player1.token = './assets/146009.svg'
game.player2.token = './assets/circle-15.svg'

gameGrid.addEventListener('click', placeTile)

function placeTile (event){
  game.takeTurn(parseInt(event.target.id))
  renderBoard();

};

function renderBoard(){
  for (var i = 0; i < game.gameBoard.length; i++){
    if (game.gameBoard[i] === game.player1){
      gameGrid.children[i].innerHTML = x

    } else if (game.gameBoard[i] === game.player2){
      console.log(gameGrid.children[i])
      gameGrid.children[i].innerHTML = o
    }
  }
}
