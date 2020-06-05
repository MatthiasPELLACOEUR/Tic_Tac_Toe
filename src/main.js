class Game {
  constructor() {
    this.turn = true;
    // this.playerX = "X"
    // this.playerO = "O"
    this.squares = document.getElementsByClassName("square");
    this.countPlayerO = document.getElementById("countPlayerO");
    this.countPlayerX = document.getElementById("countPlayerX");
    this.newGameButton = document.getElementById("newGame");
  }

  win() {
    let tableau = [
      ["00", "01", "02"],
      ["10", "11", "12"],
      ["20", "21", "22"],
      ["00", "10", "20"],
      ["01", "11", "21"],
      ["02", "12", "22"],
      ["00", "11", "22"],
      ["02", "11", "20"],
    ];

    for (let i = 0; i < tableau.length; i++) {
      if (
        document.getElementById(tableau[i][0]).innerHTML == "X" &&
        document.getElementById(tableau[i][1]).innerHTML == "X" &&
        document.getElementById(tableau[i][2]).innerHTML == "X"
      ) {
        setTimeout(() => {
          alert("Player 1 won!");
          document.location.reload(true);
        }, 500);
      } else if (
        document.getElementById(tableau[i][0]).innerHTML == "O" &&
        document.getElementById(tableau[i][1]).innerHTML == "O" &&
        document.getElementById(tableau[i][2]).innerHTML == "O"
        ) {
          setTimeout(() => {
            alert("Player 2 won!");
            document.location.reload(true);
          }, 500);
        }
      }
    }
    
  newGame() {

    this.newGameButton.addEventListener('click', (e) =>{
        document.location.reload(true);
    })
  }

checkedSquare() {
  for (let i = 0; this.squares.length; i++) {
    // window.onload = function () {
      this.squares[i].addEventListener("click", function (e) {
        if (e.target.textContent == "") {
          if (game.turn == true) {
            let countX = parseInt(game.countPlayerX.innerHTML);
            e.target.textContent = "X";
            countX += 1;
            let countXString = countX.toString();
            game.countPlayerX.innerHTML = countXString;
            game.turn = !game.turn;
          } else if (game.turn == false) {
            let countO = parseInt(game.countPlayerO.innerHTML);
            e.target.textContent = "O";
            countO += 1;
            let countOString = countO.toString();
            game.countPlayerO.innerHTML = countOString;
            game.turn = !game.turn;
          }
        }
        game.win();
      });
      game.newGame();
    }
  }
}
  
let game = new Game();
game.checkedSquare();