import { expect } from 'chai'
import updateHTML from '../../modules/update-html'
import { winner, wins, buttons, whosTurn } from '../../modules/config'

describe('Update HTML', () => {
  it('should place first move onto gameboard in top left corner = X', () => {
    let currentValue = 'X'
    let row = 0
    let column = 0
    let win = false
    updateHTML({ currentValue, row, column, win })

    expect(buttons[0][0].innerHTML).to.equal('X')
    expect(buttons[0][0].disabled).to.equal(true)
    expect(whosTurn.innerHTML).to.equal('O\'s turn')
  })

  it('should place second move onto gameboard in the middle = O', () => {
    let currentValue = 'O'
    let row = 1
    let column = 1
    let win = false
    updateHTML({ currentValue, row, column, win })

    expect(buttons[1][1].innerHTML).to.equal('O')
    expect(buttons[1][1].disabled).to.equal(true)
    expect(whosTurn.innerHTML).to.equal('X\'s turn')
  })

  it('should place the third move onto gameboard in the middle on left side = X', () => {
    let currentValue = 'X'
    let row = 1
    let column = 0
    let win = false
    updateHTML({ currentValue, row, column, win })

    expect(buttons[1][0].innerHTML).to.equal('X')
    expect(buttons[1][0].disabled).to.equal(true)
    expect(whosTurn.innerHTML).to.equal('O\'s turn')
  })

  it('should updateHTML that O won', () => {
    let currentValue = 'O'
    let win = true
    updateHTML({ currentValue, win })

    expect(winner.innerHTML).to.equal('O Wins!')
    expect(wins[currentValue]).to.equal(1)
    expect(document.getElementById(`${currentValue}-holder`).innerHTML).to.equal('1')
  })

})
