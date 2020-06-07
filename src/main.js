class Game {
  constructor() {
    this.turn = true
    this.squares = document.getElementsByClassName("square")
    this.count = 0
    this.countMove = document.getElementById("countMove")
    this.newGameButton = document.getElementById("newGame")
    this.playerWin = false
    this.gamePlay()
  }

  newGame() {
    this.newGameButton.addEventListener('click', (e) => {
      document.location.reload(true)
    })
  }

  win() {
    let tableau = [["00", "01", "02"], ["10", "11", "12"], ["20", "21", "22"], ["00", "10", "20"], ["01", "11", "21"], ["02", "12", "22"], ["00", "11", "22"], ["02", "11", "20"]]

    for (let i = 0; i < tableau.length; i++) {
      if (document.getElementById(tableau[i][0]).innerHTML == "X" && document.getElementById(tableau[i][1]).innerHTML == "X" && document.getElementById(tableau[i][2]).innerHTML == "X") {
        this.playerWin = true
        setTimeout(() => {
          alert("Player 1 won!")
          location.reload()
        }, 500)
      } else if (document.getElementById(tableau[i][0]).innerHTML == "O" && document.getElementById(tableau[i][1]).innerHTML == "O" && document.getElementById(tableau[i][2]).innerHTML == "O") {
        this.playerWin = true
        setTimeout(() => {
          alert("Player 2 won!")
          location.reload()
        }, 500)
      }
    }
    if (this.count == 9 && this.playerWin == false) {
      setTimeout(() => {
        alert("Draw !")
        location.reload()
      }, 500)
    }
  }

  countTurn() {
    this.count += 1
    this.countMove.innerHTML = this.count
    this.turn = !this.turn
  }


  gamePlay() {
    for (let i = 0; this.squares.length; i++) {
      this.squares[i].addEventListener("click", (e) => {
        if (e.target.textContent == "") {
          if (this.turn == true) {
            e.target.textContent = "X"
            this.countTurn()
          }
          else if (this.turn == false) {
            e.target.textContent = "O"
            this.countTurn()
          }
          this.win()
        }
        this.newGame()
      })
    }
  }
}

let game = new Game()