class Player {
  constructor(id){
    this.id = id;
    if (this.id === 'x'){
      this.token = './assets/x-symbol-svgrepo-com.svg'
    } else {
      this.token = './assets/146009.svg'
    }
    this.wins = 0
  }
  increaseWins(){
    this.wins++
  }
}
