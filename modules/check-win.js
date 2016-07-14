import checkWinner from './check-winner';
import checkTie from './check-tie';
import { wins, buttons } from './config';

// let possibleWins = [
//   [0,1,2],
//   [3,4,5],
//   [6,7,8],
//   [0,3,6],
//   [1,4,7],
//   [2,5,8],
//   [0,4,8],
//   [2,4,6]
// ]

export default function checkWin(move){

  // let currentValues = buttons.map((button, index) => {
  //   if(button.innerHTML === move) return index
  //   return null
  // })
  // .filter(item => item || item === 0)
  // console.log(currentValues)
  //
  //
  // if(possibleWins.includes(currentValues)){
  //   console.log(move + 'win')
  // }
  //
  // possibleWins.map(possibleWin => {
  //   console.log(possibleWin)
  //   if(possibleWin == currentValues){
  //     alert('win')
  //   }
  // })


  // possibleWins.map(possibleWin => {
  //   possibleWin.map(possibleW => {
  //     if(possibleW.includes(currentValues)){
  //       console.log('win')
  //     }
  //   })
  // })

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
