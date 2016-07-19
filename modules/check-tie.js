import { buttons, wins, winner, board } from './config';

export default function checkTie(){
  let column = 0
  let row = 0

  for (column; column < 9; column++) {
    if(column === 3 || column === 6) {
      row++
    }
    column++
  }

  var isThereATieTop = buttons
    .map(button => button[row].disabled ? true : null)
    .filter(i => i)
    .length === 3

  if (isThereATieTop){
    wins['ties'] += 1;
    document.getElementById('ties-holder').innerHTML = wins['ties'];
    winner.innerHTML = 'Tie!';
  }
}
