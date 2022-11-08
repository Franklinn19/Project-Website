//create function to compare both inputs and determine winner for the round just completed


//call the function comparePlays()
function comparePlays(uPlay,cPlay){
    const thisRound = `${uPlay} vs ${cPlay}`;
    //check for tie
    if (uPlay === cPlay){
    alert(`${thisRound} is a Tie`);
    return;
}
 //if unequal plays, then the uPlay:
 //value needs to be  for one of 3 choices
 //start with rock
 //create score card

 if (uPlay==="rock"){
    if (cPlay === "scissors") {
        alert(`${thisRound} = You Win`);
        uScore++;
      } else {
        alert(`${thisRound} = Computer Wins`);
        cScore++;
      }

    }
  
  //paper
  else if (uPlay === "paper") {
    if (cPlay === "rock") {
      alert(`${thisRound} = You Win`);
      uScore++;
    } else {
      alert(`${thisRound} = Computer Wins`);
      cScore++;
    }
  }
  // Scissors
  else{
    if (cPlay === "paper") {
      alert(`${thisRound} = You Win`);
      uScore++;
    } else {
      alert(`${thisRound} = Computer Wins`);
      cScore++;
    }
  }
}


// create function to show score:
function liveScore() {
  document.getElementById("uScore").textContent = uScore;
  document.getElementById("cScore").textContent = cScore;
}

//create function to keep score
    function checkScore() {
      if (uScore === 3 || cScore === 3) {
        const winner =
          uScore === 3
            ? "Congratulations! You win the game!"
            : "Computer wins. Try again next time!";
        alert(winner);
        return true;
      }
      return false;
    }
  


