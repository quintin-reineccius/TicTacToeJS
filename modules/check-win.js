import checkWinner from './check-winner';
import checkTie from './check-tie';
import { wins, buttons } from './config';


export default function checkWin(move){
  if (buttons[0].innerHTML === move && buttons[1].innerHTML === move && buttons[2].innerHTML === move ||
      buttons[3].innerHTML === move && buttons[4].innerHTML === move && buttons[5].innerHTML === move ||
      buttons[6].innerHTML === move && buttons[7].innerHTML === move && buttons[8].innerHTML === move ||
      buttons[0].innerHTML === move && buttons[3].innerHTML === move && buttons[6].innerHTML === move ||
      buttons[1].innerHTML === move && buttons[4].innerHTML === move && buttons[7].innerHTML === move ||
      buttons[2].innerHTML === move && buttons[5].innerHTML === move && buttons[8].innerHTML === move ||
      buttons[0].innerHTML === move && buttons[4].innerHTML === move && buttons[8].innerHTML === move ||
      buttons[2].innerHTML === move && buttons[4].innerHTML === move && buttons[6].innerHTML === move) {
    checkWinner(move, wins);
  } else {
    checkTie(wins);
  }
}
