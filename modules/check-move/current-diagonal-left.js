export default function currentDiagonalLeft({ column, row, currentValue, board }){
  let index = 2
  let DiagonalWinValues = board
   .map(row => row[index--])
   .filter(item => item === currentValue)
   .length

  if(DiagonalWinValues === 3){
    return true
  }

  return false
}
