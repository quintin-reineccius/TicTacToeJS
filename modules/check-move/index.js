import currentRow from './current-row'
import currentColumn from './current-column'
import currentDiagonalLeft from './current-diagonal-left'
import currentDiagonalRight from './current-diagonal-right'
import fullBoardCheck from './full-board-check'
import updateHTML from '../update-html'

export default function checkMove(data, { currentValue, row, column }){
  //clean iswin function istie function
  if ( currentRow(data) || currentColumn(data) || currentDiagonalLeft(data) || currentDiagonalRight(data) ){
    let win = true
    return updateHTML({ currentValue, row, column, win })
  }

  if (fullBoardCheck(data)) {
    currentValue = 'ties'
    return updateHTML({ currentValue, row, column })
  }
}
