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
              
              console.log("playerX played");

              game.turn = !game.turn;
              console.log("playerO's turn");
            } else if (game.turn == false) {
              let countO = parseInt(game.countPlayerO.innerHTML);
              
              e.target.textContent = "O";
              
              countO += 1;
              
              let countOString = countO.toString();

              game.countPlayerO.innerHTML = countOString;
              
              // player2.count += 1
              // countPlayer2.textContent = player2.count
              
              console.log("playerO played");
              console.log("playerX's turn");
              game.turn = !game.turn;
            }
          }
          game.win();
        });
        game.newGame();
        // };
      }
    }
  }
  
  console.log("hey matthias");
let game = new Game();
console.log(game);
game.checkedSquare();
// Add 1s until it reach 10s

// PAUSE TIMER
//       let stop = document.getElementById('stop')
//       stop.addEventListener('click', function(e){
//         stopTimer()
//         started = false
//       })

//       // RESET TIMER AND GRID
//       let reset = document.getElementById('reset')
//       reset.addEventListener('click', function(e){
//           if(squares[i].textContent !== ""){
//               squares[i].textContent = ""
//           }
//           countPlayer1.textContent = "0"
//           player1.count = 0
//           countPlayer2.textContent = "0"
//           player2.count = 0
//           player1.turn = true
//           resetTimer()
//           gamestart.cross.disabled = ""
//           gamestart.circle.disabled = ""
//       })
// }

//
// //

// //STOP TIMER
// function stopTimer(){
//   clearInterval(timerCount)
// }

// //RESET TIMER
// function resetTimer() {
//   sTens = 0
//   sOnes = 0
//   mTens = 0
//   mOnes = 0
//   hTens = 0
//   hOnes = 0
//   hoursTens.textContent = hTens
//   hoursOnes.textContent = hOnes

//   minutesTens.textContent = mTens
//   minutesOnes.textContent = mOnes

//   secondsTens.textContent = sTens
//   secondsOnes.textContent = sOnes
// }
