export default function currentColumn({ column, row, currentValue, board }){
  //clean up change logic so you ccan use with connect4 
  let currentColumnCheck = board
    .map(row => row[column])
    .filter(item => item === currentValue)
    .length

  if(currentColumnCheck === 3){
    return true
  }

  return false
}
