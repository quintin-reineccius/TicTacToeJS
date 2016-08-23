import { expect } from 'chai'
import userMove from '../../modules/user-move'
import { buttons, whosTurn, board } from '../../modules/config'

describe('User Move', () => {
  it('should put move into board array, in the top left corner = X', () => {
    userMove(0, 0)

    expect(board[0][0]).to.equal('X')
  })

  it('should put move into board array, in the middle = O', () => {
    userMove(1, 1)

    expect(board[1][1]).to.equal('O')
  })

  it('should put move into board array, in the bottom right corner = X', () => {
    userMove(2, 2)

    expect(board[2][2]).to.equal('X')
  })
})
