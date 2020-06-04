class Game {
  constructor() {
    // this.started = false
    this.turn = true
    // this.launchGame = document.getElementById('launchGame')
    // this.playerX = "X"
    // this.playerO = "O"
    this.squares = document.getElementsByClassName('square')
    this.reset = document.getElementById('reset')
  }

  // launchGame(){
  // this.launchGame.addEventListener('click', function(e){
  // When click on start button associate cross or circle on player1 and start timer
  // if(document.getElementById('cross').checked == true){
  //       this.assignPlayer("X", "O")
  //     }
  //     else if(document.getElementById('circle').checked == true){
  //      this.assignPlayer("O", "X")
  //      }

  //    if(this.started == false){
  //      this.started = true
  //      timerCount = setInterval(startTimer, 1000);
  //    }
  //    })     
  //  }
  // assignPlayer(checker1, checker2){
  //   player1 = new Player(checker1, true, 0)
  //   player2 = new Player(checker2, false, 0)
  // }

  
  resetGame(){
    console.log('test');
      // document.location.reload(true);
      
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
    ]

    let clickedSquareContent = 0

    let winner = false

    for (let i = 0; i < tableau.length; i++) {
      if (document.getElementById(tableau[i][0]).innerHTML == "X" && document.getElementById(tableau[i][1]).innerHTML == "X" && document.getElementById(tableau[i][2]).innerHTML == "X") {
        clickedSquareContent+=1
        winner = true
        setTimeout(() => {
          alert('Player 1 won!')
          document.location.reload(true);
        }, 500)
      }
      else if (document.getElementById(tableau[i][0]).innerHTML == "O" && document.getElementById(tableau[i][1]).innerHTML == "O" && document.getElementById(tableau[i][2]).innerHTML == "O") {
        clickedSquareContent+=1
        winner = true
        setTimeout(() => {
          alert('Player 2 won!')
          document.location.reload(true);
        }, 500)
      }
      else if((document.getElementById(tableau[i][0]).innerHTML !== "X" && document.getElementById(tableau[i][1]).innerHTML !== "X" && document.getElementById(tableau[i][2]).innerHTML !== "X") && (document.getElementById(tableau[i][0]).innerHTML !== "O" && document.getElementById(tableau[i][1]).innerHTML !== "O" && document.getElementById(tableau[i][2]).innerHTML !== "O")){
        clickedSquareContent++
        console.log(clickedSquareContent);
        
      }
    }

  }

  checkedSquare() {
    let clickedSquareContent = []

    let winner = false

    for (let i = 0; this.squares.length; i++) {
      // Display X or O depending of player's turn
      this.squares[i].addEventListener('click', function (e) {
        if (e.target.textContent == "") {
          if (game.turn == true) {

            e.target.textContent = "X"

            // player1.count += 1
            // countPlayer1.textContent = player1.count

            console.log('playerX played');

            game.turn = !game.turn
            console.log("playerO's turn");
          }
          else if (game.turn == false) {

            e.target.textContent = "O"

            // player2.count += 1
            // countPlayer2.textContent = player2.count

            console.log('playerO played');
            console.log("playerX's turn");
            game.turn = !game.turn

          }
        }
        game.win()

      })
    }
    this.reset.addEventListener('click', function(e){
      game.resetGame()
    })
  }
}


let game = new Game
game.checkedSquare()
game.resetGame()



  // Add 1s until it reach 10s
            // let countPlayer1 = document.getElementById('countPlayer1')
            // let countPlayer2 = document.getElementById('countPlayer2')


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