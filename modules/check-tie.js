import { buttons, wins, winner, board } from './config';

export default function checkTie(){
  var isThereATie = board
    .map(row => row.includes("E"))
    .filter(Boolean)
    .length === 0

  if (isThereATie){
    wins['ties'] += 1;
    document.getElementById('ties-holder').innerHTML = wins['ties'];
    winner.innerHTML = 'Tie!';
  }
}
