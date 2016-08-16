import clearBoard from './clear-board'

export default function clearScores({ buttons, board, winner, wins, table, tbody }){
  for(let i in wins){
    wins[i] = 0;
    document.getElementById(`${i}-holder`).innerHTML = wins[i];
  }

  clearBoard({ buttons, board, winner, table, tbody });
}
