import { buttons, board, winner } from './config';

export default function clearBoard(){
  buttons.forEach(row => {
    row.forEach(column => {
      column.disabled = false
      column.innerHTML = ' '
    })
  })

  board.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      board[rowIndex][columnIndex] = false
    })
  })

  winner.innerHTML = ' ';
}
