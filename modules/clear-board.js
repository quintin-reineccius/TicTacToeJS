export default function clearBoard({ buttons, board, winner, table, tbody }){
  table.classList.remove("winnerGif");
  tbody.classList.remove("removeBlack");

  buttons.forEach(row => {
    row.forEach(column => {
      column.disabled = false
      column.innerHTML = ''
      column.classList.remove('removeWhite');
    })
  })

  board.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      board[rowIndex][columnIndex] = false
    })
  })

  winner.innerHTML = '';
}
