import { buttons } from './config';

export default function checkTie(wins){
  var isThereATie = buttons
    .map(button => button.disabled ? true : null)
    .filter(i => i)
    .length === 9

  if (isThereATie){
    wins['ties'] += 1;
    document.getElementById('ties-holder').innerHTML = wins['ties'];
    winner.innerHTML = 'Tie!';
  }
}
