import { expect } from 'chai'
import currentDiagonalLeft from '../../modules/check-move/current-diagonal-left'

describe('Current Diagonal Left', () => {
  it('should return false if theres no win', () => {
    let currentValue = 'X'
    let column = 1
    let row = 2
    let board = [
      ['X', 'O', 'O'],
      ['O', 'X', 'X'],
      ['X', 'O', 'O'],
    ]

    expect(currentDiagonalLeft({ column, row, currentValue, board })).to.equal(false)
  })

  it('should return true if there is a win diagonal from left to right', () => {
    let currentValue = 'O'
    let column = 2
    let row = 2
    let board = [
      ['O', false, false],
      ['X', 'O', false],
      [false, 'X', 'O'],
    ]

    expect(currentDiagonalLeft({ column, row, currentValue, board })).to.equal(true)
  })
})
