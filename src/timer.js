class Timer
{
  
  constructor()
  {
    hoursTens : document.getElementById('h-tens')
    hoursOnes : document.getElementById('h-ones')
    minutesTens : document.getElementById('m-tens')
    minutesOnes : document.getElementById('m-ones')
    secondsTens : document.getElementById('s-tens')
    secondsOnes : document.getElementById('s-ones')
    sTens : 0
    sOnes : 0
    mTens : 0
    mOnes : 0
    hTens : 0
    hOnes : 0
    this.squaresTimer = document.getElementById('test')
  }
     
  startOnClick(){
    
        // console.log(squaresTimer[0]);
      this.squaresTimer.addEventListener('click', function(e){
        console.log('test');
      })
    }
  }

    startTimer() {
    
        if (this.sOnes < 10) {
          this.sOnes++
          this.secondsOnes.textContent = this.sOnes
        }
        
        // Reset seconds ones | Add 1 to seconds tens when it reach 10s
        if (this.sOnes > 9) {
          this.sOnes = 0
          this.secondsOnes.textContent = this.sOnes
          this.sTens++
          this.secondsTens.textContent = this.sTens
        }
        
        // Add 1 to minutes tens when it reach 10 seconds
        if (this.sOnes == 10) {
          this.sTens++
          this.sTens.textContent =this.sTens
        }
        
        // Reset seconds tens when it reach 1 minute
        if (this.sTens > 5) {
          this.sTens = 0
          this.secondsTens.textContent = this.sTens
          this.mOnes++
          this.minutesOnes.textContent = this.mOnes
        }
        
        // Add 1 to minutes tens when it reach 10 minutes
        if (this.mOnes > 9) {
          this.mOnes = 0
          this.minutesOnes.textContent = this.mOnes
          this.mTens++
          this.minutesTens.textContent = this.mTens
        }
        
        // Add 1 to hour ones | Reset minutes ones and tens when it reach 1 hour 
        if (this.mTens > 5) {
          this.mTens = 0
          this.minutesTens.textContent = this.mTens
          this.mOnes = 0
          this.minutesOnes.textContent = this.mOnes
          this.hOnes++
          this.hoursOnes.textContent = this.hOnes
        }
        
        // Add 1 to hour tens | Reset hour ones when it reach 10 hours
        if (this.hOnes > 9) {
          this.hOnes = 0
          this.hoursOnes.textContent = this.hOnes
          this.hTens++
          this.hoursTens.textContent = this.hTens
          // Display message when it takes life..
          setTimeout(() => {
            alert('C\'est long pour un morpion...')
          }, 1000)
        }
  }
}

let time = new Timer
time.startTimer()
time.startOnClick()