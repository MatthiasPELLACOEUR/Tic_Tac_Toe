class Game
{
  constructor(){
    // this.started = false
    this.turn = true
    // this.launchGame = document.getElementById('launchGame')
    // this.playerX = "X"
    // this.playerO = "O"
    this.squares = document.getElementsByClassName('square')
  }
  
  // launchGame(){
    // this.launchGame.addEventListener('click', function(e){
      // When click on start button associate cross or circle on player1 and start timer
      // if(document.getElementById('cross').checked == true){
        //   this.assignPlayer("X", "O")
        // }
        // else if(document.getElementById('circle').checked == true){
          //   this.assignPlayer("O", "X")
          // }
          
          //if(this.started == false){
            //this.started = true
            //timerCount = setInterval(startTimer, 1000);
            //}
            // })     
            // }
            // assignPlayer(checker1, checker2){
              //   player1 = new Player(checker1, true, 0)
              //   player2 = new Player(checker2, false, 0)
              // }
              win(){
                let tableau = [
                  ["00","01","02"],
                  ["10","11","12"],
                  ["20","21","22"],
                  ["00","10","20"],
                  ["01","11","21"],
                  ["02","12","22"],
                  ["00","11","22"],
                  ["02","11","20"],
                ]
                for (let i = 0; i < tableau.length; i++) {      
                  if(document.getElementById(tableau[i][0]).innerHTML == "X" && document.getElementById(tableau[i][1]).innerHTML == "X" && document.getElementById(tableau[i][2]).innerHTML == "X"){
                    alert('Player 1 won!')
                    document.location.reload(true);

                  }
                  else if(document.getElementById(tableau[i][0]).innerHTML == "O" && document.getElementById(tableau[i][1]).innerHTML == "O" && document.getElementById(tableau[i][2]).innerHTML == "O"){
                    alert('Player 2 won!')
                    document.location.reload(true);
                  }
                }
              }
              
              
              checkedSquare(){
                // this.turn = turn
                for (let i = 0; this.squares.length; i++) {
                  // Display X or O depending of player's turn
                  this.squares[i].addEventListener('click', function(e) {
                    
                    if(e.target.textContent == "") {
                      if(game.turn == true){
                        // console.log("playerX's turn");
                        
                        e.target.textContent = "X"
                        
                        // player1.count += 1
                        // countPlayer1.textContent = player1.count
                        
                        console.log('playerX played');
                        
                        game.turn = !game.turn
                        console.log("playerO's turn");
                      }
                      else if(game.turn == false){
                        // console.log("playerO's turn");
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
              }
            }
            

class Timer{
  
  constructor(){
    this.hoursTens = document.getElementById('h-tens')
    this.hoursOnes = document.getElementById('h-ones')
    this.minutesTens = document.getElementById('m-tens')
    this.minutesOnes = document.getElementById('m-ones')
    this.secondsTens = document.getElementById('s-tens')
    this.secondsOnes = document.getElementById('s-ones')
    this.sTens = 0
    this.sOnes = 0
    this.mTens = 0
    this.mOnes = 0
    this.hTens = 0
    this.hOnes = 0
    this.squaresTimer = document.getElementsByClassName('square')
  }
    
    startTimer() {
      
      for (let i = 0; i < this.squaresTimer.length; i++) {
        console.log(this.squaresTimer[0]);
      this.squaresTimer[0].addEventListener('click',function(e){
        if (time.sOnes < 10) {
          time.sOnes++
          time.secondsOnes.textContent = time.sOnes
        }
        
        // Reset seconds ones | Add 1 to seconds tens when it reach 10s
        if (time.sOnes > 9) {
          time.sOnes = 0
          time.secondsOnes.textContent = time.sOnes
          time.sTens++
          time.secondsTens.textContent = time.sTens
        }
        
        // Add 1 to minutes tens when it reach 10 seconds
        if (time.sOnes == 10) {
          time.sTens++
          time.sTens.textContent =time.sTens
        }
        
        // Reset seconds tens when it reach 1 minute
        if (time.sTens > 5) {
          time.sTens = 0
          time.secondsTens.textContent = time.sTens
          time.mOnes++
          time.minutesOnes.textContent = time.mOnes
        }
        
        // Add 1 to minutes tens when it reach 10 minutes
        if (time.mOnes > 9) {
          time.mOnes = 0
          time.minutesOnes.textContent = time.mOnes
          time.mTens++
          time.minutesTens.textContent = time.mTens
        }
        
        // Add 1 to hour ones | Reset minutes ones and tens when it reach 1 hour 
        if (time.mTens > 5) {
          time.mTens = 0
          time.minutesTens.textContent = time.mTens
          time.mOnes = 0
          time.minutesOnes.textContent = time.mOnes
          time.hOnes++
          time.hoursOnes.textContent = time.hOnes
        }
        
        // Add 1 to hour tens | Reset hour ones when it reach 10 hours
        if (time.hOnes > 9) {
          time.hOnes = 0
          time.hoursOnes.textContent = time.hOnes
          time.hTens++
          time.hoursTens.textContent = time.hTens
          // Display message when it takes life..
          setTimeout(() => {
            alert('C\'est long pour un morpion...')
          }, 1000)
        }
      })
    }
  }
}


let game = new Game
game.checkedSquare()
game.win()
let time = new Timer
time.startTimer()
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