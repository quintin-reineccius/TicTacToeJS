import userMove from './user-move'
import clearBoard from './clear-board'
import clearScores from './clear-scores'
import { buttons, board, winner, wins, table, tbody } from './config'

let clearGameBoard = document.getElementById('clearBoard')
let clearGameScores = document.getElementById('clearScores')

export default function addOnclicks(){
  let row = 0
  let column = 0

  buttons.forEach(button => {
    button.forEach(item => {
      if(column === 3){
        column = 0
        row++
      }
      column++

      item.onclick = function(row, column) {
        return () => userMove(row, column - 1)
      }(row, column)
    })
  })

  clearGameBoard.onclick = () => clearBoard({ buttons, board, winner, table, tbody })
  clearGameScores.onclick = () => clearScores({ buttons, board, winner, wins, table, tbody })
}
