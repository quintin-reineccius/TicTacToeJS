import checkWin from './check-win';
import checkMove from './check-move';
import { buttons, whosTurn, board } from './config';

let currentValue

export default function userMove(index, row) {
  if(currentValue === 'X'){
    currentValue = 'O'
    whosTurn.innerHTML = "X's turn"
  }else {
    currentValue = 'X'
    whosTurn.innerHTML = "O's turn"
  }

  buttons[index].innerHTML = currentValue;
  buttons[index].disabled = true;
  board[row][index] = currentValue;

  checkMove({ index, row, currentValue, board })
  // checkWin(currentValue);
}
