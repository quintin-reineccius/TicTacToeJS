function isWin(move){
  if (btn[0].innerHTML === move && btn[1].innerHTML === move && btn[2].innerHTML === move ||
      btn[3].innerHTML === move && btn[4].innerHTML === move && btn[5].innerHTML === move ||
      btn[6].innerHTML === move && btn[7].innerHTML === move && btn[8].innerHTML === move ||
      btn[0].innerHTML === move && btn[3].innerHTML === move && btn[6].innerHTML === move ||
      btn[1].innerHTML === move && btn[4].innerHTML === move && btn[7].innerHTML === move ||
      btn[2].innerHTML === move && btn[5].innerHTML === move && btn[8].innerHTML === move ||
      btn[0].innerHTML === move && btn[4].innerHTML === move && btn[8].innerHTML === move ||
      btn[2].innerHTML === move && btn[4].innerHTML === move && btn[6].innerHTML === move) {
    whoWin(move);
  } else {
    isTie();
  }
}

function isTie(){
  var isThereATie = btn
    .map(button => button.disabled ? true : null)
    .filter(i => i)
    .length === 9

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
