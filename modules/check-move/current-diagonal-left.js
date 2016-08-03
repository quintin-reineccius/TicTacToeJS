export default function currentDiagonalLeft({ column, row, currentValue, board }){
  let DiagonalWinValues = board
    .map((row, index) => row[index])
    .filter(item => item === currentValue)
    .length

  if(DiagonalWinValues === 3){
    return true
  }

  return false
}
