import { expect } from 'chai'
import checkTie from '../modules/check-move/check-tie'

describe('Check Tie', () => {
  it('should return false because there is a win', () => {
    let board = [
      ['X', false, false],
      ['O', 'X', false],
      [false, 'O', 'X'],
    ]

    expect(checkTie({ board })).to.equal(false)
  })

  it('should return true because there is a tie', () => {
    let board = [
      ['X', 'X', 'O'],
      ['O', 'O', 'X'],
      ['X', 'X', 'O'],
    ]

    expect(checkTie({ board })).to.equal(true)
  })
})
