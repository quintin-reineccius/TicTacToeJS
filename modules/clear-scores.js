import { wins } from './config'
import clearBoard from './clear-board'

export default function clearScores(){
  for(let i in wins){
    wins[i] = 0;
    document.getElementById(`${i}-holder`).innerHTML = wins[i];
  }

  clearBoard();
}
