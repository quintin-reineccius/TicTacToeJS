import currentRow from './current-row'
import currentColumn from './current-column'
import currentDiagonalLeft from './current-diagonal-left'
import currentDiagonalRight from './current-diagonal-Right'
import updateWinner from '../update-winner'
import checkTie from '../check-tie'

export default function checkMove(data, currentValue){
  if(currentRow(data) || currentColumn(data) || currentDiagonalLeft(data) || currentDiagonalRight(data)){
    updateWinner(currentValue)
  } else {
    checkTie()
  }
}
