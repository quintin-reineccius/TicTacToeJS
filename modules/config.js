module.exports = {
  buttons: [
    [...document.querySelectorAll(".row1 > td > button")],
    [...document.querySelectorAll(".row2 > td > button")],
    [...document.querySelectorAll(".row3 > td > button")]
  ],
  winner: document.getElementById('winner'),
  whosTurn: document.getElementById('whos-turn'),
  wins: {
    X: 0,
    O: 0,
    ties: 0
  },
  board: [
    [false,false,false],
    [false,false,false],
    [false,false,false],
  ]
}
