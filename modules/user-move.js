import checkWin from './check-win';
import { buttons, whosTurn } from './config';

let currentValue

export default function userMove(number) {
  if(currentValue === 'X'){
    currentValue = 'O'
    whosTurn.innerHTML = "X's turn"
  }else {
    currentValue = 'X'
    whosTurn.innerHTML = "O's turn"
  }

  buttons[number].innerHTML = currentValue;
  buttons[number].disabled = true;

  checkWin(currentValue);
}
