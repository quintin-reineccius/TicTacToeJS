import { expect } from 'chai'
import clearBoard from '../modules/clear-board';

describe('Clear Board', () => {
  it('should clear the board, buttons and winner', () => {
    let winner = document.getElementById('winner')
    winner.innerHTML = "X wins"

    let buttons = [
      [...document.querySelectorAll(".row1 > button")],
      [...document.querySelectorAll(".row2 > button")],
      [...document.querySelectorAll(".row3 > button")]
    ]
    buttons.forEach(row => {
      row.forEach(column => {
        column.disabled = true
        column.innerHTML = 'X'
      })
    })

    let board = [
      ["X","X","O"],
      ["O","O","X"],
      ["X","X","O"],
    ]

    clearBoard({ buttons, board, winner })

    expect(winner.innerHTML).to.equal('')

    expect(buttons[0][0].innerHTML === '' && buttons[0][0].hasAttribute("disabled") === false).to.equal(true)
    expect(buttons[1][1].innerHTML === '' && buttons[1][1].hasAttribute("disabled") === false).to.equal(true)
    expect(buttons[2][2].innerHTML === '' && buttons[2][2].hasAttribute("disabled") === false).to.equal(true)

    expect(board[0][0]).to.equal(false)
    expect(board[1][1]).to.equal(false)
    expect(board[2][2]).to.equal(false)
  })
})
