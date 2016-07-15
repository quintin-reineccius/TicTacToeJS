module.exports = {
  buttons: [ ...document.querySelectorAll(".row > button") ],
  winner: document.getElementById('winner'),
  whosTurn: document.getElementById('whos-turn'),
  wins: {
    X: 0,
    O: 0,
    ties: 0
  },
  board: [
    ["E","E","E"],
    ["E","E","E"],
    ["E","E","E"],
  ]
}
