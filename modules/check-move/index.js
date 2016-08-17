import currentRow from './current-row'
import currentColumn from './current-column'
import currentDiagonalLeft from './current-diagonal-left'
import currentDiagonalRight from './current-diagonal-right'
import fullBoardCheck from './full-board-check'
import updateHTML from '../update-html'

export default function checkMove(data, currentValue){
  //clean iswin function istie function 
  if ( currentRow(data) || currentColumn(data) || currentDiagonalLeft(data) || currentDiagonalRight(data) ){
    return updateHTML(currentValue)
  }

  if (fullBoardCheck(data)) {
    currentValue = 'ties'
    return updateHTML(currentValue)
  }
}
