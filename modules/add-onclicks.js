import userMove from './user-move'
import clearBoard from './clear-board'
import clearScores from './clear-scores'
import { buttons, board, winner, wins } from './config'

let clearGameBoard = document.getElementById('clearBoard')
let clearGameScores = document.getElementById('clearScores')

export default function addOnclicks(){
  let row = 0
  let column = 0

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].forEach(button => {
      if(column === 3) {
        column = 0
        row++
      }
      column++

      button.onclick = function(column, row) {
        return () => userMove(column - 1, row)
      }(column, row)
    })
  }

  clearGameBoard.onclick = () => clearBoard({ buttons, board, winner })
  clearGameScores.onclick = () => clearScores({ buttons, board, winner, wins })
}
