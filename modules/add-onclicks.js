import userMove from './user-move'
import clearBoard from './clear-board'
import clearScores from './clear-scores'
import { buttons } from './config'

let clearGameBoard = document.getElementById('clearBoard')
let clearGameScores = document.getElementById('clearScores')

export default function addOnclicks(){
  let row = 0
  let count = 0

  buttons.forEach((button, index) => {
    if(count === 3) {
      count = 0
      row++
    }
    count++

    button.onclick = function(index, row) {
      return () => userMove(index, row)
    }(index, row)
  })

  clearGameBoard.onclick = () => clearBoard()
  clearGameScores.onclick = () => clearScores()
}
