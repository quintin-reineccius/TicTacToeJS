import checkWin from './check-win';
import { buttons } from './config';

let currentValue

export default function userMove(number) {
  if(currentValue === 'X'){
    currentValue = 'O'
  }else {
    currentValue = 'X'
  }

  buttons[number].innerHTML = currentValue;
  buttons[number].disabled = true;

  checkWin(currentValue);
}
