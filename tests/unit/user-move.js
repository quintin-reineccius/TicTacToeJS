import { expect } from 'chai'
import userMove from '../../modules/user-move'
import { buttons, whosTurn, board } from '../../modules/config'

describe('User Move', () => {
  it('should start the game in the top left corner = X', () => {
    userMove(0, 0)

    expect(buttons[0][0].innerHTML).to.equal('X')
    expect(buttons[0][0].disabled).to.equal(true)
    expect(board[0][0]).to.equal('X')
    expect(whosTurn.innerHTML).to.equal('O\'s turn')
  })

  it('should add secound move in the middle of the board = O', () => {
    userMove(1, 1)

    expect(buttons[1][1].innerHTML).to.equal('O')
    expect(buttons[1][1].disabled).to.equal(true)
    expect(board[1][1]).to.equal('O')
    expect(whosTurn.innerHTML).to.equal('X\'s turn')
  })

  it('should add third move to the bottom right corner = X', () => {
    userMove(2, 2)

    expect(buttons[2][2].innerHTML).to.equal('X')
    expect(buttons[2][2].disabled).to.equal(true)
    expect(board[2][2]).to.equal('X')
    expect(whosTurn.innerHTML).to.equal('O\'s turn')
  })
})
