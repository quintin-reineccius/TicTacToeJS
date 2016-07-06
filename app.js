var currentValue = 'x'
var oWins = 0;
var xWins = 0;
var tie = 0;

var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');
var btn7 = document.getElementById('btn7');
var btn8 = document.getElementById('btn8');
var btn9 = document.getElementById('btn9');
var oCounter = document.getElementById('o-wins');
var xCounter = document.getElementById('x-wins');
var tieCounter = document.getElementById('tie');
var winner = document.getElementById('winner');


function btn(button) {
  if(currentValue === 'x'){
    currentValue = 'o'
  }else {
    currentValue = 'x'
  }

  button.innerHTML = currentValue;
  button.disabled = true;

  if (btn1.innerHTML === 'x' && btn2.innerHTML === 'x' && btn3.innerHTML === 'x' ||
      btn4.innerHTML === 'x' && btn5.innerHTML === 'x' && btn6.innerHTML === 'x' ||
      btn7.innerHTML === 'x' && btn8.innerHTML === 'x' && btn9.innerHTML === 'x' ||
      btn1.innerHTML === 'x' && btn4.innerHTML === 'x' && btn7.innerHTML === 'x' ||
      btn2.innerHTML === 'x' && btn5.innerHTML === 'x' && btn8.innerHTML === 'x' ||
      btn3.innerHTML === 'x' && btn6.innerHTML === 'x' && btn9.innerHTML === 'x' ||
      btn1.innerHTML === 'x' && btn5.innerHTML === 'x' && btn9.innerHTML === 'x' ||
      btn3.innerHTML === 'x' && btn5.innerHTML === 'x' && btn7.innerHTML === 'x'){
    xWins += 1;
    xCounter.innerHTML = xWins;
    winner.innerHTML = 'X Wins!';
    reset();
  } else if (btn1.innerHTML === 'o' && btn2.innerHTML === 'o' && btn3.innerHTML === 'o' ||
             btn4.innerHTML === 'o' && btn5.innerHTML === 'o' && btn6.innerHTML === 'o' ||
             btn7.innerHTML === 'o' && btn8.innerHTML === 'o' && btn9.innerHTML === 'o' ||
             btn1.innerHTML === 'o' && btn4.innerHTML === 'o' && btn7.innerHTML === 'o' ||
             btn2.innerHTML === 'o' && btn5.innerHTML === 'o' && btn8.innerHTML === 'o' ||
             btn3.innerHTML === 'o' && btn6.innerHTML === 'o' && btn9.innerHTML === 'o' ||
             btn1.innerHTML === 'o' && btn5.innerHTML === 'o' && btn9.innerHTML === 'o' ||
             btn3.innerHTML === 'o' && btn5.innerHTML === 'o' && btn7.innerHTML === 'o'){
    oWins += 1;
    oCounter.innerHTML = oWins;
    winner.innerHTML = 'O Wins!';
    reset();
  } else if (btn1.disabled === true && btn2.disabled === true && btn3.disabled === true &&
             btn4.disabled === true && btn5.disabled === true && btn6.disabled === true &&
             btn7.disabled === true && btn8.disabled === true && btn9.disabled === true) {
    tie += 1;
    tieCounter.innerHTML = tie;
    winner.innerHTML = 'Tie!';
    reset();
  }
}

function reset(){
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

  currentValue = 'x'
}
