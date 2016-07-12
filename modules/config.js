module.exports = {
  buttons: [ ...document.querySelectorAll(".row > button") ],
  winner: document.getElementById('winner'),
  wins: {
    X: 0,
    O: 0,
    ties: 0
  }
}
