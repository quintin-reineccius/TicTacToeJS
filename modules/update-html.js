import { buttons, winner, wins, table, tbody, whosTurn } from './config'

export default function updateHTML({ currentValue, row, column, win }){
  //clean up maybe
  if(currentValue === 'X'){
    whosTurn.innerHTML = "O's turn"
  }
  else {
    whosTurn.innerHTML = "X's turn"
  }

  if(win == false){
    buttons[row][column].innerHTML = currentValue
    buttons[row][column].disabled = true
  }

  let holder = document.getElementById(`${currentValue}-holder`)

  if(win == true) {
    buttons.forEach(row => {
      row.forEach(column => {
        column.disabled = true
        column.classList.add("removeWhite")
      })
    })

    table.classList.add("winnerGif")
    tbody.classList.add("removeBlack")

    wins[currentValue] += 1
    holder.innerHTML = wins[currentValue]
    return winner.innerHTML = `${currentValue} Wins!`
  }

  if(currentValue === 'ties'){
    wins[currentValue] += 1
    holder.innerHTML = wins[currentValue]
    return winner.innerHTML = 'Tie!'
  }
}
