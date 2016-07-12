import userMove from './user-move'
import clearBoard from './clear-board'
import clearScores from './clear-scores'
import { buttons } from './config'

let clearGameBoard = document.getElementById('clearBoard')
let clearGameScores = document.getElementById('clearScores')

export default function addOnclicks(currentValue){
  buttons.forEach((button, index) => {
    button.onclick = () => userMove(index, currentValue)
  })

  clearGameBoard.onclick = () => clearBoard()
  clearGameScores.onclick = () => clearScores()
}
