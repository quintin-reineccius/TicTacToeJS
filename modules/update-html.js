import { buttons, winner, wins } from './config'

export default function updateHTML(currentValue){
  if (currentValue === 'ties'){
    winner.innerHTML = 'Tie!';
  }
  else {
    winner.innerHTML = `${currentValue} Wins!`;
  }

  wins[currentValue] += 1;
  document.getElementById(`${currentValue}-holder`).innerHTML = wins[currentValue]

  buttons.forEach(row => {
    row.forEach(column => {
      column.disabled = true
    })
  })
}
