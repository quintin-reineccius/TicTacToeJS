import checkMove from './check-move';
import { buttons, whosTurn, board } from './config';

let currentValue

export default function userMove(column, row) {
  if(currentValue === 'X'){
    currentValue = 'O'
    whosTurn.innerHTML = "X's turn"
  }else {
    currentValue = 'X'
    whosTurn.innerHTML = "O's turn"
  }

  buttons[row][column].innerHTML = currentValue;
  buttons[row][column].disabled = true;
  board[row][column] = currentValue;

  checkMove({ column, row, currentValue, board }, currentValue)
}
