export default function currentColumn({ column, row, currentValue, board }){
   let winValues = board
    .map(row => row[column])
    .filter(item => item === currentValue)
    .length

    if(winValues === 3){
      return true
    }

    return false
}
