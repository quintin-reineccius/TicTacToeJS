import { expect } from 'chai'
import currentDiagonalRight from '../modules/check-move/current-diagonal-right'

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

    expect(currentDiagonalRight({ column, row, currentValue, board })).to.equal(false)
  })

  it('should return true if there is a win diagonal from right to left', () => {
    let currentValue = 'O'
    let column = 2
    let row = 0
    let board = [
      [false, false, 'O'],
      [false, 'O', 'X'],
      ['O', 'X', false],
    ]

    expect(currentDiagonalRight({ column, row, currentValue, board })).to.equal(true)
  })
})
