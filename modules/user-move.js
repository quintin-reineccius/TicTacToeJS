import checkMove from './check-move'
import updateHTML from './update-html'
import { buttons, whosTurn, board } from './config'

let currentValue
let win = false

export default function userMove(row, column) {
  if(currentValue === 'X'){
    currentValue = 'O'
  }
  else {
    currentValue = 'X'
  }

  board[row][column] = currentValue

  updateHTML({ currentValue, row, column, win })
  checkMove({ column, row, currentValue, board }, { currentValue, row, column })
}
