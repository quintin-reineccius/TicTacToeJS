import { buttons, wins, winner, board } from './config';

export default function checkTie(){
  //needs cleaning up
  var isThereATieTop = buttons
    .map(button => button[0].disabled ? true : null)
    .filter(i => i)
    .length === 3

  var isThereATieMiddle = buttons
    .map(button => button[1].disabled ? true : null)
    .filter(i => i)
    .length === 3

  var isThereATieBottom = buttons
    .map(button => button[2].disabled ? true : null)
    .filter(i => i)
    .length === 3

  if (isThereATieTop && isThereATieMiddle && isThereATieBottom){
    wins['ties'] += 1;
    document.getElementById('ties-holder').innerHTML = wins['ties'];
    winner.innerHTML = 'Tie!';
  }
}
