export default function clearBoard({ buttons, board, winner }){
  buttons.forEach(row => {
    row.forEach(column => {
      column.disabled = false
      column.innerHTML = ''
    })
  })

  board.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      board[rowIndex][columnIndex] = false
    })
  })

  winner.innerHTML = '';
}
