import { expect } from 'chai'
import fullBoardCheck from '../modules/check-move/full-board-check'

describe('Checking if board is full', () => {
  it('should return false because board is not full', () => {
    let board = [
      ['X', false, false],
      ['O', 'X', false],
      [false, 'O', 'X'],
    ]

    expect(fullBoardCheck({ board })).to.equal(false)
  })

  it('should return true because board is full', () => {
    let board = [
      ['X', 'X', 'O'],
      ['O', 'O', 'X'],
      ['X', 'X', 'O'],
    ]

    expect(fullBoardCheck({ board })).to.equal(true)
  })
})
