var winner = document.getElementById('winner');
var buttons = [ ...document.querySelectorAll(".row > button") ];
var currentValue = 'X'
var wins = {
  X: 0,
  O: 0,
  ties: 0
}

function userMove(number) {
  if(currentValue === 'X'){
    currentValue = 'O'
  }else {
    currentValue = 'X'
  }

  buttons[number].innerHTML = currentValue;
  buttons[number].disabled = true;

  checkWin(currentValue);
}
