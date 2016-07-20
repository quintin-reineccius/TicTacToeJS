import currentRow from './current-row'
import currentColumn from './current-column'
import currentDiagonalLeft from './current-diagonal-left'
import currentDiagonalRight from './current-diagonal-Right'
import checkTie from './check-tie'
import updateHTML from '../update-html'

export default function checkMove(data, currentValue){
  if (currentRow(data) || currentColumn(data) || currentDiagonalLeft(data) || currentDiagonalRight(data)){
    updateHTML(currentValue)
  }
  else if (checkTie(data)) {
    currentValue = 'ties'
    updateHTML(currentValue)
  }
}
