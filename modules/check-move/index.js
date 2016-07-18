import currentRow from './current-row'
import currentColumn from './current-column'
import currentDiagonalLeft from './current-diagonal-left'
import currentDiagonalRight from './current-diagonal-Right'
import checkWinner from '../check-winner'
import checkTie from '../check-tie'

export default function checkMove(data, currentValue){
  if(currentRow(data) || currentColumn(data) || currentDiagonalLeft(data) || currentDiagonalRight(data)){
    checkWinner(currentValue)
  } else {
    checkTie()
  }
}
