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

  isWin(currentValue)
}
