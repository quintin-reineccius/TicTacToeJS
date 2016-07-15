export default function currentRow({ index, row, currentValue, board }){
  let currentRowCheck = board[row]
    .filter(value => value === currentValue)
    .length

  if(currentRowCheck === 3){
    return true
  }

  return false
}
