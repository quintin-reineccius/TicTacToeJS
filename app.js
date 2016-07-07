var currentValue = 'x'
var oWins = 0;
var xWins = 0;
var ties = 0;

var btn = [ ...document.querySelectorAll("button") ];
var oCounter = document.getElementById('o-wins');
var xCounter = document.getElementById('x-wins');
var tieCounter = document.getElementById('tie');
var winner = document.getElementById('winner');


function button(number) {
  if(currentValue === 'x'){
    currentValue = 'o'
  }else {
    currentValue = 'x'
  }

  btn[number].innerHTML = currentValue;
  btn[number].disabled = true;

  isWin(currentValue);
}
