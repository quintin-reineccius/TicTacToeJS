export default function currentColumn({ column, row, currentValue, board }){
  let currentColumnCheck = board
    .map(row => row[column])
    .filter(item => item === currentValue)
    .length

  if(currentColumnCheck === 3){
    return true
  }

  return false
}
