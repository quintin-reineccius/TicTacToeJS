function checkWin(move){
  if (buttons[0].innerHTML === move && buttons[1].innerHTML === move && buttons[2].innerHTML === move ||
      buttons[3].innerHTML === move && buttons[4].innerHTML === move && buttons[5].innerHTML === move ||
      buttons[6].innerHTML === move && buttons[7].innerHTML === move && buttons[8].innerHTML === move ||
      buttons[0].innerHTML === move && buttons[3].innerHTML === move && buttons[6].innerHTML === move ||
      buttons[1].innerHTML === move && buttons[4].innerHTML === move && buttons[7].innerHTML === move ||
      buttons[2].innerHTML === move && buttons[5].innerHTML === move && buttons[8].innerHTML === move ||
      buttons[0].innerHTML === move && buttons[4].innerHTML === move && buttons[8].innerHTML === move ||
      buttons[2].innerHTML === move && buttons[4].innerHTML === move && buttons[6].innerHTML === move) {
    checkWinner(move);
  } else {
    checkTie();
  }
}

function checkTie(){
  var isThereATie = buttons
    .map(button => button.disabled ? true : null)
    .filter(i => i)
    .length === 9

  if (isThereATie){
    wins['ties'] += 1;
    document.getElementById(`ties-holder`).innerHTML = wins['ties'];
    winner.innerHTML = 'Tie!';
  }
}

function checkWinner(move){
  wins[move] += 1;
  document.getElementById(`${move}-holder`).innerHTML = wins[move]
  winner.innerHTML = `${move} Wins!`;
  buttons.forEach(button => button.disabled = true );
}

function clearBoard(){
  buttons.forEach(button => {
    button.disabled = false
    button.innerHTML = ' '
  })

  winner.innerHTML = ' ';
  currentValue = 'X'
}

function clearScores(){
  for(let i in wins){
    wins[i] = 0;
    document.getElementById(`${i}-holder`).innerHTML = wins[i];
  }

  clearBoard();
}
