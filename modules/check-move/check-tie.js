export default function checkTie({ board }){
  var isThereATie = board
    .map(wholeBoard => wholeBoard.map(wb => wb).filter(Boolean).length === 3)
    .filter(Boolean)
    .length === 3

  if (isThereATie){
    return true
  }

  return false
}
