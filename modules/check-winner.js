import { buttons, winner } from './config'

export default function checkWinner(move, wins){
  wins[move] += 1;
  document.getElementById(`${move}-holder`).innerHTML = wins[move]
  winner.innerHTML = `${move} Wins!`;
  buttons.forEach(button => button.disabled = true );
}
