import { buttons, winner, wins } from './config'

export default function checkWinner(currentValue){
  wins[currentValue] += 1;

  document.getElementById(`${currentValue}-holder`).innerHTML = wins[currentValue]
  winner.innerHTML = `${currentValue} Wins!`;

  buttons.forEach(row => {
    row.forEach(column => {
      column.disabled = true
    })
  })
}
