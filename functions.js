function isWin(move){
  if ( btn[0].innerHTML === "x" && btn[1].innerHTML === "x" && btn[2].innerHTML === "x" ||
       btn[3].innerHTML === "x" && btn[4].innerHTML === "x" && btn[5].innerHTML === "x" ||
       btn[6].innerHTML === "x" && btn[7].innerHTML === "x" && btn[8].innerHTML === "x" ||
       btn[0].innerHTML === "x" && btn[3].innerHTML === "x" && btn[6].innerHTML === "x" ||
       btn[1].innerHTML === "x" && btn[4].innerHTML === "x" && btn[7].innerHTML === "x" ||
       btn[2].innerHTML === "x" && btn[5].innerHTML === "x" && btn[8].innerHTML === "x" ||
       btn[0].innerHTML === "x" && btn[4].innerHTML === "x" && btn[8].innerHTML === "x" ||
       btn[2].innerHTML === "x" && btn[4].innerHTML === "x" && btn[6].innerHTML === "x" ){
    whoWin("x");
  }else if (btn[0].innerHTML === "o" && btn[1].innerHTML === "o" && btn[2].innerHTML === "o" ||
            btn[3].innerHTML === "o" && btn[4].innerHTML === "o" && btn[5].innerHTML === "o" ||
            btn[6].innerHTML === "o" && btn[7].innerHTML === "o" && btn[8].innerHTML === "o" ||
            btn[0].innerHTML === "o" && btn[3].innerHTML === "o" && btn[6].innerHTML === "o" ||
            btn[1].innerHTML === "o" && btn[4].innerHTML === "o" && btn[7].innerHTML === "o" ||
            btn[2].innerHTML === "o" && btn[5].innerHTML === "o" && btn[8].innerHTML === "o" ||
            btn[0].innerHTML === "o" && btn[4].innerHTML === "o" && btn[8].innerHTML === "o" ||
            btn[2].innerHTML === "o" && btn[4].innerHTML === "o" && btn[6].innerHTML === "o") {
    whoWin("o");
  } else {
    isTie();
  }
}

function isTie(){
  var buttonCheck = []
  var isThereATie

  for(let button of btn){
    if(button.disabled === true){
      buttonCheck.push(true)
    }
  }
  if(buttonCheck.length === 9){
    isThereATie = true
  }

  if (isThereATie){
    ties += 1;
    tieCounter.innerHTML = ties;
    winner.innerHTML = 'Tie!';
  }
}

function whoWin(move){
  if (move === 'x'){
    xWins += 1;
    xCounter.innerHTML = xWins;
    winner.innerHTML = 'X Wins!';

    for(var i = 0; i < 9; i++){
      btn[i].disabled = true;
    }
  } else {
    oWins += 1;
    oCounter.innerHTML = oWins;
    winner.innerHTML = 'O Wins!';

    for(var i = 0; i < 9; i++){
      btn[i].disabled = true;
    }
  }
}

function clearBoard(){
  for(var i = 0; i < 9; i++){
    btn[i].disabled = false;
    btn[i].innerHTML = '&nbsp;&nbsp;';
  }

  winner.innerHTML = ' ';
  currentValue = 'x'
}

function clearScores(){
  xWins = 0;
  xCounter.innerHTML = xWins;

  oWins = 0;
  oCounter.innerHTML = oWins;

  ties = 0;
  tieCounter.innerHTML = ties;
}
