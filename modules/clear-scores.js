import clearBoard from './clear-board'

export default function clearScores({ wins, buttons, board, winner }){
  for(let i in wins){
    wins[i] = 0;
    document.getElementById(`${i}-holder`).innerHTML = wins[i];
  }

  clearBoard({ buttons, board, winner });
}
