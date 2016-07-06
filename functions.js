function isWin(move){
  if (  (btn1.innerHTML === move && btn2.innerHTML === move && btn3.innerHTML === move) ||
        (btn4.innerHTML === move && btn5.innerHTML === move && btn6.innerHTML === move) ||
        (btn7.innerHTML === move && btn8.innerHTML === move && btn9.innerHTML === move) ||
        (btn1.innerHTML === move && btn4.innerHTML === move && btn7.innerHTML === move) ||
        (btn2.innerHTML === move && btn5.innerHTML === move && btn8.innerHTML === move) ||
        (btn3.innerHTML === move && btn6.innerHTML === move && btn9.innerHTML === move) ||
        (btn1.innerHTML === move && btn5.innerHTML === move && btn9.innerHTML === move) ||
        (btn3.innerHTML === move && btn5.innerHTML === move && btn7.innerHTML === move) ){
    whoWin(move)
  } else if (btn1.disabled === true && btn2.disabled === true && btn3.disabled === true &&
             btn4.disabled === true && btn5.disabled === true && btn6.disabled === true &&
             btn7.disabled === true && btn8.disabled === true && btn9.disabled === true){
    tie += 1;
    tieCounter.innerHTML = tie;
    winner.innerHTML = 'Tie!';
  }
}

function whoWin(move){
  if (move === 'x'){
    xWins += 1;
    xCounter.innerHTML = xWins;
    winner.innerHTML = 'X Wins!';

    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;
    btn7.disabled = true;
    btn8.disabled = true;
    btn9.disabled = true;
  } else {
    oWins += 1;
    oCounter.innerHTML = oWins;
    winner.innerHTML = 'O Wins!';

    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;
    btn7.disabled = true;
    btn8.disabled = true;
    btn9.disabled = true;
  }
}

function resetBoard(){
  btn1.disabled = false;
  btn1.innerHTML = '&nbsp;&nbsp;';

  btn2.disabled = false;
  btn2.innerHTML = '&nbsp;&nbsp;';

  btn3.disabled = false;
  btn3.innerHTML = '&nbsp;&nbsp;';

  btn4.disabled = false;
  btn4.innerHTML = '&nbsp;&nbsp;';

  btn5.disabled = false;
  btn5.innerHTML = '&nbsp;&nbsp;';

  btn6.disabled = false;
  btn6.innerHTML = '&nbsp;&nbsp;';

  btn7.disabled = false;
  btn7.innerHTML = '&nbsp;&nbsp;';

  btn8.disabled = false;
  btn8.innerHTML = '&nbsp;&nbsp;';

  btn9.disabled = false;
  btn9.innerHTML = '&nbsp;&nbsp;';

  winner.innerHTML = ' ';
  currentValue = 'x'
}
