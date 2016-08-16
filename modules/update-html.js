import { buttons, winner, wins, table, tbody } from './config'

export default function updateHTML(currentValue){
  if (currentValue === 'ties'){
    winner.innerHTML = 'Tie!';
  }
  else {
    winner.innerHTML = `${currentValue} Wins!`;

    table.classList.add("winnerGif");
    tbody.classList.add("removeBlack");

    buttons.forEach(row => {
      row.forEach(column => {
        column.disabled = true
        column.classList.add("removeWhite");
      })
    })
  }

  wins[currentValue] += 1;
  document.getElementById(`${currentValue}-holder`).innerHTML = wins[currentValue]
}
